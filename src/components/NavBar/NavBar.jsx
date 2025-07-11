import { useNavigate } from "react-router-dom";
import './nav_style.css';
import { useEffect, useState } from "react";

const NavBar = ({ number_page }) => {
  const navigate = useNavigate();
  const pages = ['home', 'about', 'rooms', 'blog', 'contact', 'resume'];
  const li_nav = ['HOME', "ABOUT", "ROOMS", "BLOG", "BOOK", "RESUME"];
  const [scrollY, setScrollY] = useState(0);

  const handlePage = (e) => {
    navigate(`/${pages[e]}`);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav_container ${scrollY > 0 ? 'nav_container_scroll' : ''}`}>
      <div className="nav-left">
        <button onClick={() => { navigate('/home') }} className="nav_logo">
          Sirisak Hotel
        </button>
      </div>
      <div className="nav_right">
        <ul>
          {li_nav.map((e, index) => (
            <li key={index}>
              <button
                onClick={() => { handlePage(index) }}
                className={`${number_page === index + 1 ? "font_color" : ""}`}
              >
                {e}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavBar;
