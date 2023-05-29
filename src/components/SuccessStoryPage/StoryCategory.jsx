import React from 'react';
import '../../styles/SuccessStory/StoryCategory.css'

const StoryCategory = () => {
  const categories = ['Technology', 'Travel', 'Food', 'Fashion', 'Health'];

  return (
    <section className="blog-categories">
      <div className="blog-categories__container">
        <h2 className="blog-categories__title">Blog Categories</h2>
        <div className="blog-categories__list">
          {categories.map((category, index) => (
            <a href="/" className="blog-categories__item" key={index}>
              {category}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryCategory;
