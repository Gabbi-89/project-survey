import React from 'react';

import './summary.css';

export const Summary = ( {name, email, canContributeWith, yearsOfExperience, wantsToBeMentor, label} ) => {
  
  return (
    <section className="summary-box">
      <h2 className="summary-heading" tabIndex="0">Your answers:</h2>
      <div className="answers-wrapper">
        <p className="summary-text" tabIndex="0"><span className="bold-summary-text">Name:</span> {name}</p>
        <p className="summary-text" tabIndex="0"><span className="bold-summary-text">E-mail:</span> {email} </p>
        <p className="summary-text" tabIndex="0"><span className="bold-summary-text">I can contribute with:</span> {canContributeWith} </p>
        <p className="summary-text" tabIndex="0">I have <span className="underlined-summary-text">{yearsOfExperience}</span> of experience within tech.</p>
        <p className="summary-text" tabIndex="0">{wantsToBeMentor}{label}</p>
     </div>
    </section>
  );
};