import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";
import "./blog.css";

function Blog() {
  return (
    <section className="blog section" id="blog">
      <h2 className="section__title text-cs">Latest Blog</h2>
      <p className="section__subtitle">
        My <span>Articles and Advice</span>
      </p>

      <div className="blog__container container grid">
        <div className="blog__item card card-two">
          <span className="blog__date text-cs">October 31, 2022</span>
          <h3 className="blog__title">The Main Things For The Designers</h3>
          <p className="blog__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            dolore voluptates blanditiis aut quos, perspiciatis nesciunt
            voluptatibus ad adipisci excepturi quas architecto, nemo veniam
            pariatur rem consequuntur dicta libero vel!
          </p>

          <a href="javascript" className="link">
            Read more <FaArrowRight className="link__icon" />
          </a>

          <img src={Blog1} alt="" className="blog__img" />
        </div>

        <div className="blog__item card card-two">
          <span className="blog__date text-cs">November 08, 2022</span>
          <h3 className="blog__title">Follow Your Own Design Process</h3>
          <p className="blog__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus dolore rerum quidem ipsam consequatur repellat,
            maxime itaque soluta provident quae similique expedita mollitia
            delectus exercitationem sint excepturi! Impedit, aut laboriosam?
          </p>

          <a href="javascript" className="link">
            Read more <FaArrowRight className="link__icon" />
          </a>

          <img src={Blog2} alt="" className="blog__img" />
        </div>

        <div className="blog__item card card-two">
          <span className="blog__date text-cs">December 22, 2022</span>
          <h3 className="blog__title">
            Usability Secrets to Create Better Interfaces
          </h3>
          <p className="blog__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            eveniet illo enim ut, iure quaerat laboriosam repellat. Eligendi,
            maxime necessitatibus eum, repudiandae ipsam fugit, minima maiores
            totam pariatur facilis optio.
          </p>

          <a href="javascript" className="link">
            Read more <FaArrowRight className="link__icon" />
          </a>

          <img src={Blog3} alt="" className="blog__img" />
        </div>
      </div>
    </section>
  );
}

export default Blog;
