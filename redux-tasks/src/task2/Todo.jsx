import { useDispatch,useSelector } from "react-redux";
import {useState} from 'react';
import { addTodo, removeTodo , toggleTodo } from "./slice";

function Todo(){

    const [text,setText] = useState("");
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todo.todos);

    const handleAdd=()=>{
        if(text.trim()){
            dispatch(addTodo(text));
            setText("");
        }
            
    };

    return(
        <div>
            <h1>ToDo List</h1>

            <input type="text"
            placeholder="Enter todo"
            value={text}
            onChange={(e)=>setText(e.target.value)} />

            <button onClick={handleAdd}>Add</button>

            <ul>
                {todos.map(todo=>(
                    <li key={todo.id}>
                        <span onClick={()=>dispatch(toggleTodo(todo.id))}
                            style={{textDecoration:todo.completed?"line-through":"none"}}>
                        {todo.text}</span>
                    <button onClick={()=>dispatch(removeTodo(todo.id))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Todo;