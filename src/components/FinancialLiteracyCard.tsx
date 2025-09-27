import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Award, Clock, Star } from 'lucide-react';

interface FinancialLiteracyCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  points: number;
  completed: boolean;
  category: 'Credit' | 'Savings' | 'Investment' | 'Budgeting';
}

const FinancialLiteracyCard: React.FC<FinancialLiteracyCardProps> = ({
  title,
  description,
  duration,
  difficulty,
  progress,
  points,
  completed,
  category
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-secondary text-secondary-foreground';
      case 'Intermediate': return 'bg-accent text-accent-foreground';
      case 'Advanced': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Credit': return '💳';
      case 'Savings': return '💰';
      case 'Investment': return '📈';
      case 'Budgeting': return '📊';
      default: return '📚';
    }
  };

  return (
    <Card className={`fintech-card ${completed ? 'border-secondary' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{getCategoryIcon(category)}</span>
            <div>
              <CardTitle className="text-base font-semibold">{title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
          </div>
          
          {completed && (
            <div className="flex items-center space-x-1 text-secondary">
              <Award className="w-4 h-4" />
              <span className="text-xs font-medium">Completed</span>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <Badge className={getDifficultyColor(difficulty)} variant="secondary">
              {difficulty}
            </Badge>
            
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{duration}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-accent">
            <Star className="w-3 h-3" />
            <span className="font-medium">{points} pts</span>
          </div>
        </div>
        
        {!completed && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
        
        <div className="flex items-center space-x-2 pt-2">
          <BookOpen className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium cursor-pointer hover:underline">
            {completed ? 'Review Lesson' : 'Start Learning'}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialLiteracyCard;