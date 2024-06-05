import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import styles from './components/TodoListItem.module.css';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Performs an API request to Airtable.
  const airtableRequest = async ({ method = "GET", body, recordId}) => {
    const baseUrl = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    const url = recordId ? `${baseUrl}/${recordId}` : baseUrl;
    const headers = {
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      "Content-Type": "application/json",
    };
    const options = {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  };

  // Fetches the initial todo list from Airtable.
  const fetchData = async () => {
    try {
      const data = await airtableRequest({});
      const todos = data.records.map((item) => ({
        id: item.id,
        title: item.fields.title,
      }));
      setTodoList(todos);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Adds a new todo item to Airtable and updates local state.
  const addTodo = async (newTodoTitle) => {
    try {
      const body = { fields: { title: newTodoTitle } };
      const data = await airtableRequest({ method: "POST", body });
      const newTodo = { id: data.id, title: data.fields.title };
      setTodoList((prevTodos) => [...prevTodos, newTodo]);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Removes a todo item from Airtable and updates local state.
  const removeTodo = async (id) => {
    try {
      await airtableRequest({ method: "DELETE", recordId: id });
      setTodoList((prevTodos) => prevTodos.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className = {styles.container}>
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? (<p>Loading...</p>) : (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)}
          </div>
        } />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
