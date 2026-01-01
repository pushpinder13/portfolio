import React from 'react';

export const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="pulse-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3>Loading Portfolio</h3>
      </div>
    </div>
  );
};