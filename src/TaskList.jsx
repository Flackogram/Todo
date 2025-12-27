import { useState } from 'react';


export default function TaskList({
    todos, onChangeTodo, onDeleteTodo
}){
     return (
         <ul className='mb-2'>
        {todos.map(todo => (
            <li key={todo.id}>
                <Task todo={todo}
                onChange={onChangeTodo} onDelete={onDeleteTodo} />
            </li>
        ))}
       </ul>
    )
}

//Adding event handlers 
/* A response after the list is edited and saved */
function handy(){
    setTimeout(() => {
        alert('List updated')
    },100)
}

/* A response when a list(s) is deleted */
function lash(){
    setTimeout(() => {
        alert('List deleted')
    },100)
}

function Task({ todo, onChange, onDelete}){
    const [isUpdating, setIsUpdating] = useState(false);
    let todoContent;
    if(isUpdating){
       todoContent = (
            <>
            <input value={todo.title}
            onChange={e => {
                onChange({
                    ...todo,
                    title:e.target.value
                });
            }} />
            <button onClick={() => {
                setIsUpdating(false);
                handy();
            }}>SAVE</button>
            </>
        );
    }else {
        todoContent = (
            <>
            {todo.title}
            <button onClick={() => 
                setIsUpdating(true)             
            }>EDIT</button>
            </>
        )
    }
    return (
        <label>
            <input type='checkbox' checked={todo.done} 
            onChange={e => {
                onChange({
                    ...todo,
                    done: e.target.checked
                });
            }} />
            {todoContent}
            <button
            onClick={() => {
              onDelete(todo.id);
                lash();}
            }>DELETE</button>
        </label>
    )
}
