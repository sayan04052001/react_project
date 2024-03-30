import style from"./home.module.css"
import { Link } from "react-router-dom"

const Home=()=>{
    return(
        <div id={style.home}>
            <div id={style.nav}>
              <Link to="/">create user</Link>
              <Link to="/users">users</Link>
            
            </div>
            <div>
            

            </div>

        </div>
    )
}
export default Home