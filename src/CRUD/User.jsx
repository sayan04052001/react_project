import axios from "axios"
import { useEffect, useState } from "react"
import style from"./home.module.css"
import { Link } from "react-router-dom"

const User=()=>{
    let [emp,setEmp]=useState([])
    // let nevigate=useNavigate()

    
    useEffect(()=>{
        axios.get("http://localhost:5000/Employees")
        .then((resp)=>{setEmp(resp.data);})
    .catch(()=>{console.log("error");})
    },[])

    let deleteuser=(id)=>{
        axios.delete(`http://localhost:5000/Employees/${id}`)


    }

   

    return(
        <div id={style.user}>
       {emp.map((ele)=>{
        return(
            <div>
                    <p>Name :{ele.Employee_Name}</p>
                    <p>Company:{ele.Employee_Company}</p>
                    <p>Salary :{ele.Employee_Salary}</p>
                    <Link to={`/edit/${ele.id}`}><button>EDIT</button></Link>
                    <button onClick={()=>{deleteuser(ele.id)}}>DELETE</button>
                
            </div>
        )
       }
       )
       }
        </div>
    )
}
export default User