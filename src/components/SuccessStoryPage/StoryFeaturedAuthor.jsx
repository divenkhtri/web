import React from 'react';
import author from '../../assets/Images/SuccessStory/StoryFeaturedBlog/author.jpg'
import '../../styles/SuccessStory/StoryFeaturedAuthor.css'

const StoryFeaturedAuthor = () => {
  const authors = [
    {
      id: 1,
      name: 'John Doe',
      image: author,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      social: {
        twitter: 'https://twitter.com/johndoe',
        facebook: 'https://facebook.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: author,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      social: {
        twitter: 'https://twitter.com/janesmith',
        facebook: 'https://facebook.com/janesmith',
        instagram: 'https://instagram.com/janesmith',
      },
    },
    // Add more featured authors as needed
  ];

  return (
    <section className="featured-author">
      <div className="featured-author__container">
        <h2 className="featured-author__title">Featured Author</h2>
        <div className="featured-author__grid">
          {authors.map((author) => (
            <div className="featured-author__card" key={author.id}>
              <div className="featured-author__image-wrapper">
                <img src={author.image} alt={author.name} className="featured-author__image" />
              </div>
              <div className="featured-author__content">
                <h3 className="featured-author__name">{author.name}</h3>
                <p className="featured-author__bio">{author.bio}</p>
                <div className="featured-author__social">
                  {author.social.twitter && (
                    <a href={author.social.twitter} className="featured-author__social-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {author.social.facebook && (
                    <a href={author.social.facebook} className="featured-author__social-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook"></i>
                    </a>
                  )}
                  {author.social.instagram && (
                    <a href={author.social.instagram} className="featured-author__social-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryFeaturedAuthor;
