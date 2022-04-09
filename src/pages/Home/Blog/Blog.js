import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container-xl">
      <div className="blog-text m-5">
        <h1 className="text-center text-info">Contributor</h1>
      </div>
      <div className="blogs-section">
        <div class="blog-card bg-light p-4 rounded shadow-lg bg-light p-4 rounded shadow-lg">
          <img
            src="https://i.ibb.co/nP48MK3/Babar.jpg"
            class="blog-image"
            alt=""
          />
          <h3 className="blog-title">Mozaddid Babar</h3>
          <h4 class="blog-overview ">Back-end Developer</h4>
        </div>

        <div class="blog-card bg-light p-4 rounded shadow-lg bg-light p-4 rounded shadow-lg">
          <img
            src="https://i.ibb.co/Hhcsc2V/sabbir.jpg"
            class="blog-image"
            alt=""
          />
          <h3 className="blog-title">Sabbir Sourav</h3>
          <h4 class="blog-overview">UI Designer</h4>
        </div>
        <div class="blog-card bg-light p-4 rounded shadow-lg">
          <img
            src="https://i.ibb.co/dPW1hBh/Shohan.jpg"
            class="blog-image"
            alt=""
          />
          <h3 className="blog-title">Samsuddin Shohan</h3>
          <h4 class="blog-overview">Front-end Developer</h4>
        </div>
        <div class="blog-card bg-light p-4 rounded shadow-lg">
          <img
            src="https://i.ibb.co/NFFH4QT/Bipul.jpg"
            class="blog-image"
            alt=""
          />
          <h3 className="blog-title">Bipul Roy</h3>
          <h4 class="blog-overview">Front-end Developer</h4>
        </div>
      </div>
      <div>
        <h1 className="text-info">Honourable Instructor</h1>
        <div class="instructor-card bg-light p-4 rounded shadow-lg">
          <img
            src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/164003258_3923903324343656_1029412892017319191_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=a7psc656VSkAX_oUjR4&_nc_ht=scontent.fdac14-1.fna&oh=00_AT_5wd2nWHjXVXeMCppixd83EnKui07Xg9xuTwCSuE6VUA&oe=62775E35"
            class="blog-image"
            alt=""
          />
          <h3 className="blog-title">Md. Nahid Sultan</h3>
          <h4 class="blog-overview">Associate Professor</h4>
          <h4 class="blog-overview text-primary">
            Dept. of Computer Science & Engineering
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Blog;
