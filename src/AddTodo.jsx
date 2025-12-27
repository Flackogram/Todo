import { useState } from 'react';

export default function AddTodo({onAddTodo}){
    const [title, setTitle] = useState('')

    return (
        <>
       <input placeholder='Add Todo'
       value={title} onChange={e => setTitle(e.target.value)} />
       <button class='ml-2 mr-0.8 mb-2.7 bg-blue-50 p-1 rounded hover:bg-blue-300'
       onClick={() => {
        setTitle('');
         onAddTodo(title)
       }}>Add</button>
        </>
    );
}