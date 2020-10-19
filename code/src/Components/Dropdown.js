import React from 'react';

export const Dropdown = ({ yearsOfExperience, setYearsOfExperience }) => {

  return (
    <select
      className="dropdown-select"
      onChange={event => setYearsOfExperience(event.target.value)}
      value={yearsOfExperience}
      required
      requiredTxt
    >
      <option value="">4. Years of experience within Tech?</option>
      <option value="0-1 year">0 - 1 year</option>
      <option value="2-5 years">2 - 5 years</option>
      <option value="10 years">5 - 10 years</option>
      <option value="10+ years">10+ years</option>
    </select>
  );
};