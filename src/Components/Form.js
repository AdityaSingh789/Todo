import React ,{useEffect} from 'react'
import {v4 as uuidv4} from "uuid"

const Form = ({input,setInput,todos,setTodos,editTodo,setEditTodo}) => {
    
    const updateTodo=(title,id) =>{
        const newTodo = todos.map((todo)=>
            todo.id === id ? {title,id} :todo
        )
        setTodos(newTodo)
        setEditTodo("")
    }

    useEffect(()=>{
        if(editTodo)
        {
            setInput(editTodo.title)
        }
        else{
            setInput("")
        }
    },[setInput,editTodo])
    
    const onInputChange = (event) =>{
        setInput(event.target.value)      
    }

const formSubmit = (event) =>
{
    event.preventDefault()
    if(!editTodo)
    {
        setTodos([...todos,{id:uuidv4(),title:input}])
        setInput("")
    }
    else{
        updateTodo(input,editTodo.id)
    }
   
}
  return (
    <form onSubmit={formSubmit}>
        <input 
            type='text' 
            placeholder='Enter Daily Task' 
            className='todo-input' 
            value={input}
            required
            onChange={onInputChange}
            />
        <button className="button-add" type="Submit">Add</button>
        
    </form>
  )
}

export default Form
