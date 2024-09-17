import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import App from "../../App"
import About from "../About/About"
import Rooms from "../Rooms/Rooms"
import Blog from "../Blog/Blog"
import Contact from "../Contact/Contact"

const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}></Route>
                <Route path="/home" element={<App/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/rooms" element={<Rooms/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter