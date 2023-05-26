import React from "react";
import "../../../styles/NewsAndBlog.css";
import { Link } from "react-router-dom";

const NewsAndBlog = () => {
  const rightCardsData = [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2019/06/23/08/34/electric-4293128_640.jpg",
      tag: "Tag 1",
      timeToRead: "5 min read",
      title: "Long Title Text That Wraps to Two Lines Max",
      author: {
        name: "Author Name 1",
        avatar:
          "https://cdn.pixabay.com/photo/2014/11/21/00/09/man-539993_640.jpg",
      },
      dateUploaded: "May 22, 2023",
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2019/06/23/08/34/electric-4293128_640.jpg",
      tag: "Tag 2",
      timeToRead: "10 min read",
      title: "Another Title Text That Wraps to Two Lines Max",
      author: {
        name: "Author Name 2",
        avatar:
          "https://cdn.pixabay.com/photo/2014/11/21/00/09/man-539993_640.jpg",
      },
      dateUploaded: "May 23, 2023",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2019/06/23/08/34/electric-4293128_640.jpg",
      tag: "Tag 3",
      timeToRead: "8 min read",
      title: "Short Title",
      author: {
        name: "Author Name 3",
        avatar:
          "https://cdn.pixabay.com/photo/2014/11/21/00/09/man-539993_640.jpg",
      },
      dateUploaded: "May 24, 2023",
    },
  ];

  return (
    <>
      <div className="blog-top-heading">
        <span>News & Blogs</span>
        <p>The latest news to drive business strategy</p>
      </div>

      <div className="blog-section">
        <div className="blog-container">
          <div className="blog-left-container">
            <div className="blog-card">
              <img
                src="https://cdn.pixabay.com/photo/2019/06/23/08/34/electric-4293128_640.jpg"
                alt="First "
                className="blog-card-image"
              />
              <div className="blog-card-details">
                <div className="blog-tag-time">
                  <span className="blog-tag">Tag</span>
                  <span className="blog-time-to-read">5 min read</span>
                </div>
                <h2 className="blog-heading">
                  Microsoft is betting its future on cloud gaming - but that’s
                  what ...
                </h2>
                <div className="blog-author-info">
                  <img
                    src="https://cdn.pixabay.com/photo/2014/11/21/00/09/man-539993_640.jpg"
                    alt="Author"
                    className="blog-author-image"
                  />
                  <div className="blog-author-name">
                    <p>Author Name</p>
                    <span className="blog-upload-date">May 22, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-right-container">
            {rightCardsData.map((card) => (
              <div className="blog-right-card" key={card.id}>
                <img
                  src={card.image}
                  alt="Card"
                  className="blog-right-card-image"
                />
                <div className="blog-right-card-details">
                  <div className="blog-right-tag-time">
                    <span className="blog-right-tag">{card.tag}</span>
                    <span className="blog-right-time-to-read">
                      {card.timeToRead}
                    </span>
                  </div>
                  <h3 className="blog-right-title">{card.title}</h3>
                  <div className="blog-right-author-info">
                    <img
                      src={card.author.avatar}
                      alt="Author Avatar"
                      className="blog-right-author-avatar"
                    />
                    <div>
                      <span className="blog-right-author-name">
                        {card.author.name}
                      </span>
                      <span className="blog-right-date-uploaded">
                        {card.dateUploaded}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to='/blog' className="blog-bottom-heading">
        <p>View all New & Blogs articles</p>
      </Link>
    </>
  );
};
export default NewsAndBlog;
