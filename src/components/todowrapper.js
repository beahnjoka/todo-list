import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Todoform} from './todoform'
import {v4 as uuidv4} from 'uuid';
import Todo from './todo';
import  { EditTodoform } from './edittodoform';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
uuidv4();



const Todowrapper = () => {

  const [todos, setTodos] =useState([])

  const addTodo =todo => {
    setTodos([...todos, {id: uuidv4(), 
      task: todo,completed: false, isediting:false}])

      console.log(todos)
  }

  const toggleComplete =id => {
    setTodos(todos.map(todo => todo.id === id?
      {...todo,completed: !todo.completed} :todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const edittodo = (id) =>{
    setTodos(todos.map((todo) => todo.id ===id? {
      ...todo, isediting:!todo.isediting} :todo))
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isediting: !todo.isediting } : todo
      )
    )
  }

  return (
    <div className='todowrapper'>
      <h1>Things to get done</h1>
      <Todoform addTodo={addTodo} />
      {todos.map((todo)=>
      (
       todo.isediting ?(
          <EditTodoform edittodo={editTask} task = {todo} />
        ) : (
        <Todo 
        key={todo.id}
        task={todo} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo}
        edittodo={edittodo}/>
      )))}
      <div className='footer'>
        Made with <FontAwesomeIcon className="heart-icon" 
      icon={faHeart}/> by DevNjoka
      </div>
    </div>
    
  )
}

export default Todowrapper