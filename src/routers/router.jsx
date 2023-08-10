import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'



const Router = () => {

   
    const {todoList} = useSelector((state)=> state.todoList)
    useEffect(()=>{
        console.log(todoList);
    },[])
  return (
    <div>router</div>
  )
}

export default Router