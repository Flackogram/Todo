import { useState } from 'react';
import AddTodo from './AddTodo.jsx';
import TaskList from './TaskList.jsx';


let frwdId = 0;
const routine = [
    {id:0, title: 'Morning devotion', done: false},
    {id:1, title: 'Exercise', done: false},
    {id:2, title: 'Breakfast', done: false}
]

export default function TaskApp(){
    const [todos, setTodos] = useState(
        routine
    );

      function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: frwdId,
        title: title,
        done: false
      }
    ]);
  }

    function handleChangeTodo(nextTodo){
        setTodos(todos.map(tj =>{
            if(tj.id === nextTodo.id){
                return nextTodo
            } else{
                return tj
            }
        }))
    }    

    function handleDeleteTodo(todoId){
        setTodos(
            todos.filter(rj => rj.id != todoId)
        )
    }

    return (
        <div class='bg-neutral-50 ml-18 mr-2 p-8 align-center place-items-center justify-center mx-auto hover:bg-neutral-200'>
        <AddTodo onAddTodo={handleAddTodo}  />
        <TaskList todos={todos} onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}/>
        </div>
    )
    
}