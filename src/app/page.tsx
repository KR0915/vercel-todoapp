"use client"
import { useState } from "react";

export default function Home() {
  const [text,setText]=useState<string>('')
  const[todos,setTodos]=useState<string[]>([])

  const changeText=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value);
    console.log(text);
  };

  const addTodos=()=>{
    const newTodos=[...todos];
    newTodos.push(text);
    setTodos(newTodos);
    setText("");
  };

  const deleteTodo=(index:number)=>{
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };

  return (
    <>
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 className="text-4xl font-bold text-gray-800 -mt-31">
        TodoList
    </h1>
      <div className="w-full max-w-xl mt-5 px-8 py-5 bg-white shadow-md rounded-lg">
        <input 
        type="text" 
        value={text} 
        onChange={changeText}
        className="rounded-md px-4 w-full py-2 my-2"
        />
        <button 
        onClick={addTodos}
        className="w-full px-4 py-2 text-white bg-gray-500 rounded transform hover:bg-gray-400 hover:scale-95 duration-200">
          Add
        </button>
      </div>
      <div className="w-full max-w-xl mt-5 px-4 py-4 rounded-lg">
        <div className="w-full flex flex-col justify-center items-center">
          {todos.map((todo,index)=>(
            <div 
            key={todo}
            className="w-3/4 p-4 rounded-md mx-2 my-2 bg-slate-500 flex flex-col justify-center">
              <div className="flex items-center my-3">
              <div className="mr-auto">
              <h2 className="mr-auto font-semibold text-slate-50">{todo}</h2>
              </div>
              <div>
              <button 
              onClick={()=>deleteTodo(index)}
              className="px-4 py-1 text-center text-xl bg-slate-600 rounded-md font-semibold text-slate-200">
                complete
              </button>
              </div>            
              </div>
            </div>))}
        </div>
      </div>
    </main>
    </>
  );
}
