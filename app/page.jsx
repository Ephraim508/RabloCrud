// app/page.js
"use client"; // Ensure this is a client component

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./globals.css";

const Page = () => {
    const [input, setInput] = useState("");
    const [showUpdate, setShowUpdate] = useState(false);
    const [updateId, setUpdateId] = useState(null);
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const addData = () => {
        const obj = {
            todo: input,
            todoId: todos.length + 1,
        };
        dispatch({ type: 'ADD_TODO', payload: obj });
        setInput("");
    };

    const deleteTodo = (id) => {
        dispatch({ type: 'DELETE_TODO', payload: { todoId: id } });
    };

    const updateTodo = (id) => {
        setShowUpdate(true);
        const findTodo = todos.find((each) => each.todoId === id);
        setInput(findTodo.todo);
        setUpdateId(findTodo.todoId);
    };

    const updateTodoItem = () => {
        dispatch({ type: 'UPDATE_TODO', payload: { todoId: updateId, todo: input } });
        setInput("");
        setShowUpdate(false);
        setUpdateId(null);
    };

    return (
        <div className="main-container">
            <div className="input-container">
                <input
                    type="search"
                    placeholder="Enter something"
                    className="search-bar"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                {showUpdate ? (
                    <button className="update-button" onClick={updateTodoItem}>Update</button>
                ) : (
                    <button className="add-button" onClick={addData}>Add</button>
                )}
            </div>
            <div className="main-data">
                {todos.length > 0 ? (
                    <div>
                        {todos.map((each) => (
                            <div key={each.todoId} className="todo-container">
                                <h1 className="todoheading">{each.todo}</h1>
                                <div className="todooperations">
                                    <button className="deletebutton" onClick={() => deleteTodo(each.todoId)}>Delete</button>
                                    <button className="updatebutton" onClick={() => updateTodo(each.todoId)}>Update</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No todos available.</div>
                )}
            </div>
        </div>
    );
};

export default Page;
