import React from 'react';
import '../../../../styles/SuccessStory/SuccessStoryPage/Objective.css';

const Objective = () => {
  return (
    <section className="detail__story__objective">
      <div className="detail__story__container">
        <h2 className="detail__story__title">Objectives</h2>
        <ul className="detail__story__objective-list">
          <li className="detail__story__objective-item">Objective 1</li>
          <li className="detail__story__objective-item">Objective 2</li>
          <li className="detail__story__objective-item">Objective 3</li>
        </ul>
      </div>
    </section>
  );
};

export default Objective;
