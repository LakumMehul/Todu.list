    import React, { useEffect, useState } from "react";
    import './Todostyley.css';
    import {FaRegTrashAlt} from 'react-icons/fa';
    import {FaRegEdit} from 'react-icons/fa';

function Todolist() {
    const [todo, setTodo] = useState("");
    const [todoIndex, setTodoIndex] = useState(-1);
    const [itemnew, setNewItem] = useState([])

   
    useEffect(()=>{
       const listString = localStorage.getItem('todoList')
      const list = JSON.parse(listString)
      if(list){
      setNewItem(list)
      }
    },[])


    const Add = (event) => {
        event.preventDefault();

        //Let's add new todo
        if (todoIndex === -1) {
            const newData = {
                todo
            }
            const updateNewList = [...itemnew, newData]
            setNewItem(updateNewList);
            localStorage.setItem('todoList', JSON.stringify(updateNewList));
          
        } else {
            //Let's update data
            itemnew[todoIndex] = {todo}
            setNewItem(itemnew)
            localStorage.setItem('todoList', JSON.stringify(itemnew));
        }

        setTodo("");
        setTodoIndex(-1);


    }

    const Ediat = (value, index) => {
        setTodo(value.todo)
        setTodoIndex(index)

    }

    const Delete = (value, index) => {
      const updateNewList =  itemnew.filter((item) => item !== value);
        setNewItem(updateNewList)
        localStorage.setItem('todoList', JSON.stringify(updateNewList));

    }



    return (
        <>
            <h1 className="name">TODO-LIST</h1>
            <form onSubmit={Add}>
                <input type="text" className="type" name="todo" value={todo} placeholder="TODO-LIST" onChange={(e) => setTodo(e.target.value)} />
                <input type="submit" className="button" />
            </form>
            <ul>
                {itemnew.map((value, index) =>
                    <li key={index}  className="list"  > {value.todo} -<button  className="ediat"   onClick={() => Ediat(value, index)}><FaRegEdit /></button> <button  className="button" style={{ backgroundColor:"white", color:"black" }} onClick={() => Delete(value, index)}> <FaRegTrashAlt /> </button></li>,
                )}

            </ul>
        </>

    )
}
export default Todolist;