import React from 'react';

import 'styles/summary.css';

export const Summary = ( {name, email, canContributeWith, 
  yearsOfExperience, likeMyJob} ) => {
  
  return (
    <section className="summary-box">
      <h2 className="summary-heading" tabIndex="0">Your answers</h2>
      <div className="answers-wrapper">
        <p className="summary-text" tabIndex="0">
          <span className="bold-summary-text">Name:</span>
          {name}
        </p>
        <p className="summary-text" tabIndex="0">
          <span className="bold-summary-text">E-mail: </span> 
          {email} 
        </p>
        <p className="summary-text" tabIndex="0">
          <span className="bold-summary-text">I can contribute with: </span> 
          {canContributeWith} 
        </p>
        <p className="summary-text" tabIndex="0">
          <span className="bold-summary-text">On a scale from 1 to 10, I like my job this much: </span>
          {likeMyJob}</p>
        <p className="summary-text" tabIndex="0">
          I have 
          <span className="underlined-summary-text">
          {yearsOfExperience}</span> 
          of experience within tech.
        </p>
        <div className="end-words-wrapper">
          <p className="end-words" tabIndex="0">I will contact you soon for a call!</p>
          <p className="end-words" tabIndex="0">Thank you so much for wanting to help me! <span role="img" aria-label="Heart emoji">&#128420;</span></p>
        </div>
     </div>
    </section>
  );
};