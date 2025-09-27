import React from 'react';

interface CreditScoreRingProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const CreditScoreRing: React.FC<CreditScoreRingProps> = ({ 
  score, 
  size = 'md', 
  showLabel = true 
}) => {
  const sizeClasses = {
    sm: { ring: 80, stroke: 6, text: 'text-lg' },
    md: { ring: 120, stroke: 8, text: 'text-2xl' },
    lg: { ring: 160, stroke: 10, text: 'text-4xl' }
  };

  const { ring, stroke, text } = sizeClasses[size];
  const radius = (ring - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 1000) * circumference;

  // Determine color based on score
  const getScoreColor = (score: number) => {
    if (score >= 750) return 'stroke-secondary'; // Excellent - Green
    if (score >= 650) return 'stroke-primary'; // Good - Blue
    if (score >= 550) return 'stroke-accent'; // Fair - Orange
    return 'stroke-destructive'; // Poor - Red
  };

  const scoreColor = getScoreColor(score);
  const scoreCategory = score >= 750 ? 'Excellent' : score >= 650 ? 'Good' : score >= 550 ? 'Fair' : 'Poor';

  return (
    <div className="credit-score-ring">
      <div className="relative inline-flex items-center justify-center">
        <svg
          width={ring}
          height={ring}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={ring / 2}
            cy={ring / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={stroke}
            fill="none"
            className="text-border opacity-20"
          />
          {/* Progress circle */}
          <circle
            cx={ring / 2}
            cy={ring / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={stroke}
            fill="none"
            className={`${scoreColor} transition-all duration-1000 ease-out`}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
          />
        </svg>
        
        {/* Score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-bold ${text} ${scoreColor.replace('stroke-', 'text-')}`}>
            {score}
          </span>
          {showLabel && (
            <span className="text-xs text-muted-foreground font-medium mt-1">
              {scoreCategory}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditScoreRing;