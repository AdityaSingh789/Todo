import React , {useState, useEffect}from 'react';
import Header from './Components/Header'
import './App.css';
import Form from './Components/Form';
import TodoList from './TodoList';

const App = () =>{
  const intialState = JSON.parse(localStorage.getItem("todos")) || [];//Store todo list item in local storage
  const[input,setInput] =useState("")//Keeps track of user input
  const[todos,setTodos]= useState(intialState);//Array in useState,Keeps track of all todos inserted
  const[editTodo,setEditTodo] = useState(null);

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return(
    <div className="box">
      <div className="box-wrapper">
           <div>
              <Header />
           </div>
           <div>
              <Form 
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
              />
           </div>
           <div>
              <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}></TodoList>
           </div>
      </div>
  </div>
  )
  
}

export default App;
