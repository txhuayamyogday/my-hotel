import React, { useState } from "react";
import { Send, Facebook, Twitter, Instagram, Dribbble } from "lucide-react";
import NavBar from "../NavBar/NavBar";
import style from "./Contact.module.css";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = "https://sample-api-fwbm.onrender.com/api/v1";
const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [signupData, setSignupData] = useState({
    first_name: "",
    surname: "",
    email: "",
    phone_number: "",
    password: "",
  });


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const fetchPosts = async (token) => {
    if (!token) {
      setPosts([]);
      return;
    }
    setIsPostsLoading(true);
    try {
      const response = await axios.get(`${API_URL}/posts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(response.data.data.posts);
    } catch (error) {
      setPosts([]);
    } finally {
      setIsPostsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/users/signup`, signupData);
      if (response.data.status === "success") {
        const token = response.data.token;
        localStorage.setItem("token", token);
        setUser(response.data.data.user);
        fetchPosts(token);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `You registered. Welcome ${response.data.data.user.first_name} ${response.data.data.user.surname}`,
        });
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Book Now!</h1>
        <p className="subtitle">
          We're open for any suggestion or just to have a chat
        </p>

        <div className="contact-info">
          <p>
            <strong>ADDRESS:</strong> 198 West 21th Street, Suite 721 VangVieng
          </p>
          <p>
            <strong>EMAIL:</strong> phonevang123@.com
          </p>
          <p>
            <strong>PHONE:</strong> +856 2076643446
          </p>
        </div>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="first_name"
            placeholder="Firstname"
            value={signupData.first_name}
            onChange={(e) => 
              setSignupData({...signupData, first_name: e.target.value})
            }
          />
            <input
              type="text"
              name="surename"
              placeholder="Lastname"
              value={signupData.surname}
              onChange={(e) => 
                setSignupData({...signupData, surname: e.target.value})
              }
            />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signupData.email}
            onChange={(e) => 
              setSignupData({...signupData, email: e.target.value})
            }
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signupData.password}
            onChange={(e) => 
              setSignupData({...signupData, password: e.target.value})
            }
          />
          <input
            type="tel"
            name="phone_number"
            placeholder="Phone Number"
            value={signupData.phone_number}
            onChange={(e) => 
              setSignupData({...signupData, phone_number: e.target.value})
            }
          />
          <button type="submit" className="send-button">
            <Send className="send-icon" size={16} />
            BOOK NOW!
          </button>
        </form>
      </div>

      <div className="error-section">
        <div className="error-content">
          <div className="div">
            <ul>
              {posts.map((post, index) => (
                <li key={post._id}>
                    <p>Name: {post.first_name}</p>
                    <p>Room: {index}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <style jsx>{`
        .contact-container {
          display: flex;
          flex-direction: column;
          background-color: white;
        }

        .contact-form {
          padding: 2rem;
          width: 100%;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .subtitle {
          color: #666;
          margin-bottom: 1.5rem;
        }

        .contact-info {
          margin-bottom: 1.5rem;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        input,
        textarea {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        textarea {
          height: 8rem;
        }

        .send-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #d4a373;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .send-icon {
          margin-right: 0.5rem;
        }

        .social-follow {
          margin-top: 2rem;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .error-section {
          background-color: #f0f0f0;
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: 300px;
        }

        .error-content {
          text-align: center;
        }

        .error-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .error-content h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
          .div{
            min-width: 500px;
          }

        @media (min-width: 768px) {
          .contact-container {
            flex-direction: row;
          }

          .contact-form,
          .error-section {
            width: 50%;
          }
        }
      `}</style>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <nav>
        <NavBar number_page={5} />
      </nav>
      <main className={style.main}>
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
