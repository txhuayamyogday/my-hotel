import NavBar from "../NavBar/NavBar";
import "./Blog.css";
import style from "./../About/About.module.css"
export const Blog_comp = () => {
  const blogs = [
    {
      id: 1,
      image: "images/image_1.jpg",
      date: "Dec. 23, 2020",
      title: "Best Hotel Near Beach in Hawaii",
      comments: 3,
    },
    {
      id: 2,
      image: "images/image_2.jpg",
      date: "Dec. 23, 2020",
      title: "Best Hotel Near Beach in Hawaii",
      comments: 3,
    },
    {
      id: 3,
      image: "images/image_3.jpg",
      date: "Dec. 23, 2020",
      title: "Best Hotel Near Beach in Hawaii",
      comments: 3,
    },
    {
      id: 4,
      image: "images/image_4.jpg",
      date: "Dec. 23, 2020",
      title: "Best Hotel Near Beach in Hawaii",
      comments: 3,
    },
    {
      id: 5,
      image: "images/image_5.jpg",
      date: "Dec. 23, 2020",
      title: "Best Hotel Near Beach in Hawaii",
      comments: 3,
    },
    {
      id: 6,
      image: "images/image_6.jpg",
      date: "Dec. 23, 2020",
      title: "Best Hotel Near Beach in Hawaii",
      comments: 3,
    },
    {
      id: 7,
      image: "images/image_7.jpg",
      date: "Dec. 23, 2020",
      title: "Best Hotel Near Beach in Hawaii",
      comments: 3,
    },
    {
      id: 8,
      image: "images/image_8.jpg",
      date: "Dec. 23, 2020",
      title: "Best Hotel Near Beach in Hawaii",
      comments: 3,
    },
  ];

  return (
    <section className="ftco-section bg-light">
      <div className="container-xl">
        <div className="row">
          {blogs.map((blog, index) => (
            <div className="col-md-6 col-lg-3 d-flex" key={blog.id}>
              <div
                className="blog-entry"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={100 * (index + 1)}
              >
                <a
                  href="blog-single.html"
                  className="block-20 img"
                  style={{ backgroundImage: `url(${blog.image})` }}
                ></a>
                <div className="text">
                  <p className="meta">
                    <span>Admin</span> <span>{blog.date}</span>
                    <a href="#"> {blog.comments} Comments</a>
                  </p>
                  <h3 className="heading mb-3">
                    <a href="#">{blog.title}</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <div className="block-27">
              <ul>
                <li>
                  <a href="#">&lt;</a>
                </li>
                <li>
                  <a href="images/image_1.jpg">1</a>
                </li>
                <li>
                  <a href="images/image_2.jpg">2</a>
                </li>
                <li>
                  <a href="images/image_3.jpg">3</a>
                </li>
                <li>
                  <a href="images/image_4.jpg">4</a>
                </li>
                <li>
                  <a href="images/image_5.jpg">5</a>
                </li>
                <li>
                  <a href="images/image_6.jpg">6</a>
                </li>
                <li>
                  <a href="images/image_7.jpg">7</a>
                </li>
                <li>
                  <a href="images/image_8.jpg">8</a>
                </li>
                <li>
                  <a href="#">&gt;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Section_5 = () => {

  return (
    <div>
      <div id={style.section5_container}>
       <h1>Have a Question?</h1> 
        <p>What's app: +856 2076643446</p>
        <p>Facebook: Kaja YANG</p>
        <p>Facebook: Phone VANG</p>
      </div>
    </div>
  )
}
const Blog = () => {
  return (
    <div>
      <nav>
        <NavBar number_page={4} />
      </nav>
      <main>
        <Blog_comp />
      </main>
      <footer>
        <Section_5 />
      </footer>
    </div>
  );
};

export default Blog;
