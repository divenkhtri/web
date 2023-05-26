import React from 'react';
import '../../styles/SuccessStory/StoryFeaturedBlogs.css'
import image1 from '../../assets/Images/SuccessStory/StoryFeaturedBlog/image1.jpg';
import image2 from '../../assets/Images/SuccessStory/StoryFeaturedBlog/image2.jpg';

const StoryFeaturedBlogs = () => {
  const featuredBlogs = [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: image1,
      url: '#',
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: image2,
      url: '#',
    },
    // Add more featured blogs as needed
  ];

  return (
    <section className="featured-blogs">
      <div className="featured-blogs__container">
        <h2 className="featured-blogs__title">Featured Blogs</h2>
        <div className="featured-blogs__grid">
          {featuredBlogs.map((blog) => (
            <a href={blog.url} className="featured-blogs__card" key={blog.id}>
              <img src={blog.image} alt={blog.title} className="featured-blogs__image" />
              <h3 className="featured-blogs__card-title">{blog.title}</h3>
              <p className="featured-blogs__card-description">{blog.description}</p>
              <span className="featured-blogs__card-link">Read More</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryFeaturedBlogs;
