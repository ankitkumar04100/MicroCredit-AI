import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, TrendingUp, Calendar, Plus } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  category: 'emergency' | 'business' | 'education' | 'housing' | 'other';
  priority: 'high' | 'medium' | 'low';
}

const GoalTracker = () => {
  const goals: Goal[] = [
    {
      id: '1',
      title: 'Emergency Fund',
      targetAmount: 1000,
      currentAmount: 650,
      targetDate: '2024-06-01',
      category: 'emergency',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Small Business Fund',
      targetAmount: 2500,
      currentAmount: 800,
      targetDate: '2024-08-15',
      category: 'business',
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Skill Development Course',
      targetAmount: 300,
      currentAmount: 180,
      targetDate: '2024-04-01',
      category: 'education',
      priority: 'high'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'emergency': return '🛡️';
      case 'business': return '💼';
      case 'education': return '🎓';
      case 'housing': return '🏠';
      default: return '🎯';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-accent text-accent-foreground';
      case 'low': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-secondary';
    if (percentage >= 50) return 'bg-primary';
    return 'bg-accent';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDaysRemaining = (dateString: string) => {
    const today = new Date();
    const targetDate = new Date(dateString);
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <Card className="fintech-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-primary" />
            <span>Financial Goals</span>
          </CardTitle>
          <Button size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-1" />
            Add Goal
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal) => {
          const percentage = Math.round((goal.currentAmount / goal.targetAmount) * 100);
          const remaining = goal.targetAmount - goal.currentAmount;
          const daysLeft = getDaysRemaining(goal.targetDate);
          
          return (
            <div key={goal.id} className="space-y-3 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getCategoryIcon(goal.category)}</span>
                  <div>
                    <h4 className="font-medium">{goal.title}</h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(goal.targetDate)}</span>
                      <span>•</span>
                      <span>{daysLeft} days left</span>
                    </div>
                  </div>
                </div>
                <Badge className={`${getPriorityColor(goal.priority)} text-xs`} variant="secondary">
                  {goal.priority} priority
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{percentage}%</span>
                </div>
                <Progress 
                  value={percentage} 
                  className="h-2"
                />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    ${goal.currentAmount.toLocaleString()} saved
                  </span>
                  <span className="font-medium">
                    ${remaining.toLocaleString()} remaining
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-muted-foreground">
                  Target: ${goal.targetAmount.toLocaleString()}
                </div>
                <Button size="sm" variant="ghost" className="text-xs">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Add Funds
                </Button>
              </div>
            </div>
          );
        })}
        
        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground mb-2">
            Total Goals Progress: 68% Complete
          </p>
          <Button variant="outline" className="w-full">
            View All Goals
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalTracker;