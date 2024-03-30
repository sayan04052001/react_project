// import Findcoder from "./component/Findcoder"
import Createuser from "./CRUD/Createuser"
import Home from "./CRUD/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import User from "./CRUD/User"
import Edit from "./CRUD/Edit"

const App=()=>{
    return(
        <div>

            <BrowserRouter>
            <Home/>
                <Routes>
                    <Route element={<Createuser/>} path="/"/>
                    <Route element={<User/>} path="/users"/>
                    <Route element={<Edit/>} path="/edit/:abc"/>
                </Routes>


            </BrowserRouter>


        {/* <Findcoder/> */}
        </div>
    )
}
export default App