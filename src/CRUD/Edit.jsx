import { useEffect, useState } from "react"
import style from"./home.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const Edit=()=>{

    let userid=useParams()
    let nevigate=useNavigate()

    let [name,setName]=useState("")
    let [company,setCompany]=useState("")
    let [salary,setSalary]=useState("")

    useEffect(()=>{
        axios.get(`http://localhost:5000/Employees/${userid.abc}`)
        .then((resp)=>{
            setName(resp.data.Employee_Name)
            setCompany(resp.data.Employee_Company)
            setSalary(resp.data.Employee_Salary)
        })
    .catch(()=>{console.log("error");})
    },[])

    let getname=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    
    let getCompany=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
    }
    let getSalary=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
    }

    let update=(e)=>{
        e.preventDefault()
            let emp={
                Employee_Name:name,
                Employee_Company:company,
                Employee_Salary:salary
            }
            axios.put(`http://localhost:5000/Employees/${userid.abc}`,emp)
            .then(()=>{console.log("data has been stored");})
            .catch(()=>{console.log("errorr");})
            
            nevigate("/users")
        }




    return(
        <div>
 <div id={style.form}>
            <div>
                <p>UPDATE PROFILE</p>
        <form action="">
            <label>   NAME :</label>
            <input type="text" value={name}  onChange={getname}/><br />
            <label>COMPANY :</label>
            <input type="text" value={company} onChange={getCompany}/><br />
            <label>SALARY :</label>
            <input type="text" value={salary}  onChange={getSalary}/><br />
            <button  onClick={update}>UPDATE</button>
        </form>
        </div>
        </div>
2hbhjkl;''
        </div>
    )
}
export default Edit
