import React, { useState } from 'react';
import '../../styles/SuccessStory/StoryPagination.css'

const StoryPagination = ({ currentPage, totalPages, onPageChange }) => {
  const [visiblePages, setVisiblePages] = useState([]);
  const pageRangeDisplayed = 3; // Number of visible pages in the pagination

  const handlePageChange = (page) => {
    onPageChange(page);
    calculateVisiblePages(page);
  };

  const calculateVisiblePages = (currentPage) => {
    const halfPageRange = Math.floor(pageRangeDisplayed / 2);
    let startPage = Math.max(1, currentPage - halfPageRange);
    let endPage = Math.min(totalPages, currentPage + halfPageRange);

    if (endPage - startPage < pageRangeDisplayed - 1) {
      if (currentPage - startPage < halfPageRange) {
        endPage = Math.min(totalPages, startPage + pageRangeDisplayed - 1);
      } else {
        startPage = Math.max(1, endPage - pageRangeDisplayed + 1);
      }
    }

    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    setVisiblePages(pages);
  };

  const renderPageNumbers = () => {
    return visiblePages.map((page) => (
      <li
        key={page}
        className={`pagination__item${currentPage === page ? ' active' : ''}`}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </li>
    ));
  };

  return (
    <ul className="story__pagination">
      <li
        className={`story__pagination__item${currentPage === 1 ? ' disabled' : ''}`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </li>
      {renderPageNumbers()}
      <li
        className={`story__pagination__item${currentPage === totalPages ? ' disabled' : ''}`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </li>
    </ul>
  );
};

export default StoryPagination;
