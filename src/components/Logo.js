import React from 'react';

export const Logo = ({ size = 40, className = "" }) => {
  return (
    <div className={`logo-container ${className}`}>
      <svg width={size} height={size} viewBox="0 0 100 100" className="logo-svg">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" />
        <text x="50" y="60" textAnchor="middle" fill="white" fontSize="32" fontWeight="bold" fontFamily="Poppins">
          P
        </text>
      </svg>
      <span className="logo-text">Portfolio</span>
    </div>
  );
};