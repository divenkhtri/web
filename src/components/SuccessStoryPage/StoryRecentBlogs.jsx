import React, { useState } from "react";
import "../../styles/SuccessStory/StoryRecentblog.css";
import image1 from "../../assets/Images/SuccessStory/StoryFeaturedBlog/image1.jpg";
import image2 from "../../assets/Images/SuccessStory/StoryFeaturedBlog/image2.jpg";
import author from "../../assets/Images/SuccessStory/StoryFeaturedBlog/author.jpg";

const StoryRecentBlogs = () => {
  const recentBlogs = [
    {
      id: 1,
      title: "Blog Title 1",
      author: "John Doe",
      date: "May 20, 2023",
      image: image1,
      tags: ["Technology", "Web Development"],
      url: "#",
    },
    {
      id: 2,
      title: "Blog Title 2",
      author: "Jane Smith",
      date: "May 18, 2023",
      image: image2,
      tags: ["Travel", "Adventure"],
      url: "#",
    },
    {
      id: 3,
      title: "Blog Title 2",
      author: "Jane Smith",
      date: "May 18, 2023",
      image: image2,
      tags: ["Travel", "Adventure"],
      url: "#",
    },
    {
      id: 4,
      title: "Blog Title 2",
      author: "Jane Smith",
      date: "May 18, 2023",
      image: image2,
      tags: ["Travel", "Adventure"],
      url: "#",
    },
    {
      id: 5,
      title: "Blog Title 2",
      author: "Jane Smith",
      date: "May 18, 2023",
      image: image2,
      tags: ["Travel", "Adventure"],
      url: "#",
    },
    {
      id: 6,
      title: "Blog Title 2",
      author: "Jane Smith",
      date: "May 18, 2023",
      image: image2,
      tags: ["Travel", "Adventure"],
      url: "#",
    },
    {
      id: 7,
      title: "Blog Title 2",
      author: "Jane Smith",
      date: "May 18, 2023",
      image: image2,
      tags: ["Travel", "Adventure"],
      url: "#",
    },
    {
      id: 8,
      title: "Blog Title 2",
      author: "Jane Smith",
      date: "May 18, 2023",
      image: image2,
      tags: ["Travel", "Adventure"],
      url: "#",
    },
    {
      id: 9,
      title: "Blog Title 2",
      author: "Jane Smith",
      date: "May 18, 2023",
      image: image2,
      tags: ["Travel", "Adventure"],
      url: "#",
    },
    {
      id: 10,
      title: "Blog Title 2",
      author: "Jane Smith",
      date: "May 18, 2023",
      image: image2,
      tags: ["Travel", "Adventure"],
      url: "#",
    },

    // Add more recent blogs as needed
  ];

  const [showAll, setShowAll] = useState(false);

  const displayBlogs = showAll ? recentBlogs : recentBlogs.slice(0, 6);
  const isGrid = displayBlogs.length > 2; // Check if there are more than 2 blogs

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <section className="recent-blogs">
      <div className="recent-blogs__container">
        <h2 className="recent-blogs__title">Recent Blogs</h2>
        <div className={`recent-blogs__grid ${isGrid ? "grid-3" : ""}`}>
          {displayBlogs.map((blog) => (
            <a href={blog.url} className="recent-blogs__card" key={blog.id}>
              <div className="recent-blogs__image-wrapper">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="recent-blogs__image"
                />
              </div>
              <ul className="recent-blogs__tags">
                {blog.tags.map((tag, index) => (
                  <li key={index} className="recent-blogs__tag">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="recent-blogs__content">
                <h3 className="recent-blogs__card-title">{blog.title}</h3>
                <div className="recent-blogs__meta">
                  <img
                    src={author}
                    alt={blog.author}
                    className="recent-blogs__author-image"
                  />
                  <div className="recent-blogs__meta-info">
                    <span className="recent-blogs__author">{blog.author}</span>
                    <span className="recent-blogs__date">{blog.date}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        {!showAll && recentBlogs.length > 6 && (
          <button className="recent-blogs__show-more" onClick={handleShowMore}>
            View More
          </button>
        )}
      </div>
    </section>
  );
};

export default StoryRecentBlogs;
