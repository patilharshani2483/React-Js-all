import { Title } from "./components/Title"
import { Add } from "./components/Add"
import { Display } from "./components/Display"
import { useState } from "react"




const App=()=>{


  const[datas,setdatas]=useState([])

  //add the user
  const addUser=(data)=>{
    setdatas([...datas,data])
  }

  //delte the user
  const deleteUser=(index)=>{
    const newArray=datas.filter((_,i)=>i!==index);
    setdatas(newArray)

    }



  return(
    <>
    <Title></Title>
    <Add addUser={addUser}></Add>
    <Display datas={datas} deleteUser={deleteUser}></Display>
    </>
  )

}
export default App