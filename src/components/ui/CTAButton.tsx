import React from 'react';

interface CTAButtonProps {
  text: string;
  icon?: React.ReactNode;
  size?: 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  icon, 
  size = 'medium', 
  className = '', 
  onClick 
}) => {
  const baseClasses = "font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 w-full sm:w-auto";
  const sizeClasses = size === 'large' 
    ? "px-6 sm:px-8 py-4 text-base sm:text-lg" 
    : "px-4 sm:px-6 py-3 text-sm sm:text-base";
  const colorClasses = "bg-green-500 hover:bg-green-600 text-white";
  
  return (
    <button 
      className={`${baseClasses} ${sizeClasses} ${colorClasses} ${className}`}
      onClick={onClick}
    >
      <span>{text}</span>
      {icon && icon}
    </button>
  );
};

export default CTAButton;