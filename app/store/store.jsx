
import { createStore } from 'redux';
const initialState={
    todos:[
        {
            todo:"Hello",
            todoId:1
        }
    ]
}

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';

const todosReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'ADD_TODO':
          return {
            ...state,
            todos: [...state.todos, action.payload]
          };
          case 'DELETE_TODO':
            return {
              ...state,
              todos: state.todos.filter(todo => todo.todoId !== action.payload.todoId)
            };
            case 'UPDATE_TODO':
                return {
                    ...state,
                    todos: state.todos.map(todo =>
                        todo.todoId === action.payload.todoId
                            ? { ...todo, todo: action.payload.todo }
                            : todo
                    ),
                };
          default:
            return state;
        }
}



const store=createStore(todosReducer)


export default store;