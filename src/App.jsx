import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/todoform/TodoForm";
import Tabs from "./components/tabs/Tabs";
import TodoList from "./components/todolist/TodoList";
import Alert from "./components/alert/Alert";

function App() {
  return (
    <div className="container">
      <h1 className="app_title">Todo App</h1>
      <Alert />
      <TodoForm />
      <Tabs />
      <TodoList />
    </div>
  );
}

export default App;
