import React from "react";
import "../../../styles/NewsAndBlog.css";
import img1 from "../../../assets/Images/blogandnews/image-web-3-desktop.jpg";
import img2 from "../../../assets/Images/blogandnews/image-web-3-mobile.jpg";
import img3 from "../../../assets/Images/blogandnews/image-retro-pcs.jpg";
import img4 from "../../../assets/Images/blogandnews/image-top-laptops.jpg";
import img5 from "../../../assets/Images/blogandnews/image-gaming-growth.jpg";
const BlogHomeScreen = () => {
  return (
    <>
      <div className="news__body_main">
        <div className="news__body_-heading">
          <h1>News & Blogs</h1>
          <p>The latest news to drive business strategy</p>
        </div>
        <div className="news__body">
          <div className="news__body__container">
            <section className="news__body__hero-content">
              <div className="news__body__first-section">
                <div className="news__body__hero-img">
                  <img
                    className="news__body__image-web-3-desktop"
                    src={img1}
                    alt=""
                  />
                  <img
                    className="news__body__image-web-3-mobile"
                    src={img2}
                    alt=""
                  />
                </div>
                <div className="news__body__intro">
                  <h1>The Bright Future of Web 3.0?</h1>
                  <div className="news__body__description">
                    <p>
                      We dive into the next evolution of the web that claims to
                      put the power of the platforms back into the hands of the
                      people. But is it really fulfilling its promise?
                    </p>
                    <button>Read more</button>
                  </div>
                </div>
                <aside className="news__body__news">
                  <h2>New</h2>
                  <div className="news__body__card">
                    <h3>Hydrogen VS Electric Cars</h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                  </div>
                  <div className="news__body__card">
                    <h3>The Downsides of AI Artistry</h3>
                    <p>
                      What are the possible adverse effects of on-demand AI
                      image generation?
                    </p>
                  </div>
                  <div className="news__body__card">
                    <h3>Is VC Funding Drying Up?</h3>
                    <p>
                      Private funding by VC firms is down 50% YOY. We take a
                      look at what that means.
                    </p>
                  </div>
                </aside>
              </div>
              <div className="news__body__second-section">
                <section className="news__body__popular">
                  <img src={img3} alt="Retro pc" />
                  <div className="news__body__content">
                    <span>01</span>
                    <h3>Reviving Retro PCs</h3>
                    <p>What happens when old PCs are given modern upgrades?</p>
                  </div>
                </section>
                <section className="news__body__popular">
                  <img src={img4} alt="" />
                  <div className="news__body__content">
                    <span>02</span>
                    <h3>Top 10 Laptops of 2022</h3>
                    <p>Our best picks for various needs and budgets.</p>
                  </div>
                </section>
                <section className="news__body__popular">
                  <img src={img5} alt="" />
                  <div className="news__body__content">
                    <span>03</span>
                    <h3>The Growth of Gaming</h3>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default BlogHomeScreen;
