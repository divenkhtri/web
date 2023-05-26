import React from "react";
import StoryHeader from "../../components/SuccessStoryPage/StoryHeader";
import StoryFeaturedBlogs from "../../components/SuccessStoryPage/StoryFeaturedBlogs";
import StoryCategory from "../../components/SuccessStoryPage/StoryCategory";
import StoryRecentBlogs from "../../components/SuccessStoryPage/StoryRecentBlogs";
import StoryFeaturedAuthor from "../../components/SuccessStoryPage/StoryFeaturedAuthor";
import { useState } from "react";
import StoryPagination from "../../components/SuccessStoryPage/StoryPagination";

const SuccessStory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Total number of pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Will proform data fetching or update the component state based on the new page
  };
  return (
    <>
      <main>
        <StoryHeader /> {/* HeroBanner */}
        <StoryFeaturedBlogs />
        <StoryCategory />
        <StoryRecentBlogs />
        <StoryFeaturedAuthor />
        <StoryPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </>
  );
};

export default SuccessStory;
