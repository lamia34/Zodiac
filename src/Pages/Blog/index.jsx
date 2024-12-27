import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import data from "./data";
import Header from "../../components/Header";
import Instagram from "../../components/Instagram";
import Footer from "../../components/Footer";
import UpIcon from "../../components/UpIcon";

import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";


const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Header />
      <br/>
      <br/>
      <br/>
      <div className="container-blog d-flex justify-content-around">
        <div className="col-8">
          <div className="posts d-flex flex-wrap">
            {currentPosts.map((blogPost) => (
              <div
                key={blogPost.id}
                className="col-6 post"
                onMouseEnter={() => setHoveredPost(blogPost.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <img
                  src={blogPost.img}
                  alt={blogPost.title}
                  className="blog-image"
                />
                 <div className="post-content">
    <h6>{blogPost.title}</h6>
    <div className="aut-publish">
      <p className="author">by Same Timahe</p>
      <p className="published-date">Sep 17, 2023</p>
    </div>
    
    
    {hoveredPost === blogPost.id && (
      <div className="overlay">
        <p>
          <Link to={`/blogdetail/${blogPost.id}`} className="readmore">
            Daha çoxu...
          </Link>
        </p>
      </div>
    )}
  </div>
              </div>
            ))}
          </div>
          <div className="next-previous-btns d-flex justify-content-center">
            <div className="previous-btn">
              {currentPage > 1 && (
                <button onClick={handlePreviousPage}><FaAngleLeft className="pi pi-chevron-left"></FaAngleLeft></button>
              )}
            </div>
            <div className="next-btn">
              {data.length > indexOfLastPost && (
                <button onClick={handleNextPage}><FaAngleRight className="pi pi-chevron-right"></FaAngleRight></button>
              )}
            </div>
          </div>
        </div>
        <div className="col-4">
        <div className="categories">
  <div className="categories-heading">
    <h3>Astroloji Kateqoriyalar</h3>
  </div>
  <div className="categories-content">
    <ul className="categories-list" typeof="none">
      <li>
        <a href="./" className="d-flex justify-content-between">
          Hamısı <span>(250)</span>
        </a>
      </li>
      <li>
        <a href="./" className="d-flex justify-content-between">
          Bürclər <span>(80)</span>
        </a>
      </li>
      <li>
        <a href="./" className="d-flex justify-content-between">
          Günlük Təhlil <span>(95)</span>
        </a>
      </li>
      <li>
        <a href="./" className="d-flex justify-content-between">
          Uyğunluq Analizi <span>(37)</span>
        </a>
      </li>
      <li>
        <a href="./" className="d-flex justify-content-between">
          Ulduz Falı <span>(42)</span>
        </a>
      </li>
    </ul>
  </div>
</div>

          <div className="feature-posts">
            <div className="feature-heading">
              <h3>Feature Posts</h3>
            </div>
            <div className="feature-content">
              <div className="fpost d-flex justify-content-between">
                <img className="f-post"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrXFkZ1eNfoGhstHknTwx9Ino7izGV4J_EQ&s"
                  alt=""
                />
                <div className="fc-p">
                  <p className="fc-pheading">
                    Amf Cannes Red Carpet Celebrities Kend...
                  </p>
                  <p className="fc-pcontent">Sep 17, 2019</p>
                </div>
              </div>
              <div className="fpost d-flex justify-content-between">
                <img className="f-post"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1Dbu4lNScktWPIHUwyUGLvGXGTqCf9KbSGdnqBrt4MfX0E1UFpG_x5ISs2_latPBmMQ&usqp=CAU"
                  alt=""
                />
                <div className="fc-p">
                  <p className="fc-pheading">
                    Amf Cannes Red Carpet Celebrities Kend...
                  </p>
                  <p className="fc-pcontent">Sep 17, 2019</p>
                </div>
              </div>
              <div className="fpost d-flex justify-content-between">
                <img className="f-post"
                  src="https://www.competere.eu/wp-content/uploads/2023/09/2023-INTERNATIONAL-PROPERTY-RIGHTS-INDEX-3.png"
                  alt=""
                />
                <div className="fc-p">
                  <p className="fc-pheading">
                    Amf Cannes Red Carpet Celebrities Kend...
                  </p>
                  <p className="fc-pcontent">Sep 17, 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <Instagram />
      <Footer />
      <UpIcon/>
    </>
  );
};

export default Blog;