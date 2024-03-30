import { useState } from "react"
import style from"./home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Createuser=()=>{
let [name,setName]=useState("")
let [compani,setCompani]=useState("")
let [salary,setSalary]=useState("")
let nevigate=useNavigate()

let getName=(e)=>{
    e.preventDefault()
    setName(e.target.value)
}

let getCompani=(e)=>{
    e.preventDefault()
    setCompani(e.target.value)
}
let gerSalary=(e)=>{
    e.preventDefault()
    setSalary(e.target.value)
}
let sub=(e)=>{
e.preventDefault()
    // console.log(name,compani,salary);
    let emp={
        Employee_Name:name,
        Employee_Company:compani,
        Employee_Salary:salary
    }
    axios.post("http://localhost:5000/Employees",emp)
    .then(()=>{console.log("data has been stored");})
    .catch(()=>{console.log("errorr");})

    nevigate("/User")
}

    return(
        <div id={style.form}>
            <div>
                <p>CREATE PROFILE</p>
        <form action="">
            <label htmlFor="">   NAME :</label>
            <input type="text" value={name}  onChange={getName} /><br />
            <label htmlFor="">COMPANY :</label>
            <input type="text" value={compani} onChange={getCompani} /><br />
            <label htmlFor="">SALARY :</label>
            <input type="text" value={salary} onChange={gerSalary}/><br />
            <button onClick={sub}>SUBMIT</button>
        </form>
        </div>
        </div>
    )
}
export default Createuser