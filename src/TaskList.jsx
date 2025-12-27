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
            <input class='p-0.21  outline-2 hover:bg-indigo-50'
            value={todo.title}
            onChange={e => {
                onChange({
                    ...todo,
                    title:e.target.value
                });
            }} />
            <button class='bg-blue-100 p-0.2 rounded hover:bg-blue-300'
            onClick={() => {
                setIsUpdating(false);
                handy();
            }}>SAVE</button>
            </>
        );
    }else {
        todoContent = (
            <>
            {todo.title}
            <button class='ml-2 mr-0.15 bg-blue-50 p-0.2 rounded hover:bg-blue-300'
            onClick={() => 
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
            <button class='ml-2 mr-0.15 bg-blue-50 p-1 rounded hover:bg-red-400'
            onClick={() => {
              onDelete(todo.id);
                lash();}
            }>DELETE</button>
        </label>
    )
}
