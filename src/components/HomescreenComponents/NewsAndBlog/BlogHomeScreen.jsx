import React from "react";
import '../../../styles/NewsAndBlog.css'
import imge2 from "../../../assets/Images/SolvingComplex/growth.jpg";
import imge3 from "../../../assets/Images/SolvingComplex/growth.jpg";

const BlogHomeScreen = () => {
  return (
    <>
      <div className="snip-container">
        <div className="snip-heading">
          <h1>News & Blog</h1>
          <p>Pushing the limits of excellence with data-led transformation</p>
        </div>
        <figure class="snip1527">
          <div class="image">
            <img
              src="https://images.unsplash.com/photo-1586339949216-35c2747cc36d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Eliminate Blind Spot"
            />
          </div>
          <figcaption>
            <h3>
            The Pros and Cons of News
            </h3>
            <p>
              I don't need to compromise my principles, because they don't have
              the slightest bearing on what happens to me anyway.
            </p>
            <button>Read More</button>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure class="snip1527">
          <div class="image">
            <img src={imge2} alt="Achieve Digital Transformation" />
          </div>
          <figcaption>
            <h3>
            The Pros and Cons of News
            </h3>
            <p>
              I don't need to compromise my principles, because they don't have
              the slightest bearing on what happens to me anyway.
            </p>
            <button>Read More</button>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure class="snip1527">
          <div class="image">
            <img src={imge3} alt="Accelerate Decision" />
          </div>
          <figcaption>
            <h3>
            How to Spot the Best Cloud for You: X Signs and Features
            </h3>
            <p>
              I don't need to compromise my principles, because they don't have
              the slightest bearing on what happens to me anyway.
            </p>
            <button>Read More</button>
          </figcaption>
          <a href="#"></a>
        </figure>
      </div>
    </>
  );
};

export default BlogHomeScreen;
