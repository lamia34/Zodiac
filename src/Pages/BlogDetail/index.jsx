import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import Instagram from "../../components/Instagram";
import Footer from "../../components/Footer";
import data from "../../Pages/Blog/data";
import UpIcon from "../../components/UpIcon";

import "./style.css";

const BlogDetail = () => {
  const { postId } = useParams();
  const blogPost = data.find((post) => post.id === parseInt(postId));

  return (
    <>
      <Header />
      <div className="container-blogDetail d-flex  justify-content-between">
        <div className="col-8">
          <div className="blog-detail container">
            <div className="bd-img">
              <img
                src={blogPost.img}
                alt={blogPost.title}
                className="blog-detail-image"
              />
            </div>
            <div className="bd-title">
              <span>LamiAstro</span>
              <h2>{blogPost.title}</h2>
            </div>
            <div className="aut-publish">
              <p className="author">by Same Timahe</p>
              <p className="published-date"> Sep 17, 2023</p>
            </div>
            {blogPost.content.split('\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </div>
        </div>
        <div className="col-4">
          <div className=".">
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

            <div className="feauture-posts">
              <div className="feauture-heading">
                <h3>Feature Posts</h3>
              </div>
              <div className="feauture-content">
                <div className="fpost d-flex justify-content-between">
                  <img
                    src="https://preview.colorlib.com/theme/ashion/img/blog/sidebar/fp-1.jpg"
                    alt=""
                  />
                  <div className="fc-p">
                    <p className="fc-pheading">
                      Amf Cannes Red Carpet Celebrities Kend...
                    </p>
                    <p className="fc-pcontent">Seb 17, 2019</p>
                  </div>
                </div>
                <div className="fpost d-flex justify-content-between">
                  <img
                    src="https://preview.colorlib.com/theme/ashion/img/blog/sidebar/fp-2.jpg"
                    alt=""
                  />
                  <div className="fc-p">
                    <p className="fc-pheading">
                      Amf Cannes Red Carpet Celebrities Kend...
                    </p>
                    <p className="fc-pcontent">Seb 17, 2019</p>
                  </div>
                </div>
                <div className="fpost d-flex justify-content-between">
                  <img
                    src="https://preview.colorlib.com/theme/ashion/img/blog/sidebar/fp-3.jpg"
                    alt=""
                  />
                  <div className="fc-p">
                    <p className="fc-pheading">
                      Amf Cannes Red Carpet Celebrities Kend...
                    </p>
                    <p className="fc-pcontent">Seb 17, 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Instagram />
      <Footer />
      <UpIcon />
    </>
  );
};

export default BlogDetail;
