import React from "react";
import StoryHeader from "../../components/SuccessStoryPage/StoryHeader";
import StoryFeaturedBlogs from "../../components/SuccessStoryPage/StoryFeaturedBlogs";


const SuccessStory = () => {
  return (
    <>
      <main>
        <StoryHeader /> {/* HeroBanner */}

        {/* <SuccessStoryOurMission/> */}
        <StoryFeaturedBlogs />
      </main>
    </>
  );
};

export default SuccessStory;
