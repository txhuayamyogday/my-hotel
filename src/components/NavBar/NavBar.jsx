import { useNavigate } from "react-router-dom"
import style from "./NavBar.module.css"
import { useEffect, useState } from "react"

const NavBar = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState('home')
    const [newPage, setNewPage] = useState('home')
    const pages = ['home', 'about', 'rooms', 'blog', 'contact']
    const li_nav = ['HOME', "ABOUT", "ROOMS", "BLOG", "CONTACT"]

    const tellPage = (e) =>{
        setPage(pages[e])
        setNewPage(page)
        console.log(newPage)
        navigate(`/${newPage}`)
    }


    return(
        <div className={style.nav_container}>
            <div className="nav-right">
                <button onClick={() => {navigate('/home')}} className={style.nav_logo}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&s" alt="img" width={100} height={100} />
                </button>
            </div>
            <div className={style.nav_left}>
                <ul>
                    {li_nav.map((e, index) => (
                        <li><button onClick={() => {tellPage(index)}}>{e}</button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default NavBar