import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
  };
  color?: 'primary' | 'secondary' | 'accent' | 'muted';
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  color = 'primary'
}) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          icon: 'text-primary bg-primary/10',
          trend: trend && trend.value > 0 ? 'text-secondary' : 'text-destructive'
        };
      case 'secondary':
        return {
          icon: 'text-secondary bg-secondary/10',
          trend: trend && trend.value > 0 ? 'text-secondary' : 'text-destructive'
        };
      case 'accent':
        return {
          icon: 'text-accent bg-accent/10',
          trend: trend && trend.value > 0 ? 'text-secondary' : 'text-destructive'
        };
      default:
        return {
          icon: 'text-muted-foreground bg-muted/50',
          trend: trend && trend.value > 0 ? 'text-secondary' : 'text-destructive'
        };
    }
  };

  const colorClasses = getColorClasses(color);

  return (
    <Card className="fintech-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{value}</p>
              {subtitle && (
                <p className="text-xs text-muted-foreground">{subtitle}</p>
              )}
            </div>
            
            {trend && (
              <div className={`flex items-center space-x-1 text-xs ${colorClasses.trend}`}>
                <span className="font-medium">
                  {trend.value > 0 ? '+' : ''}{trend.value}%
                </span>
                <span>{trend.label}</span>
              </div>
            )}
          </div>
          
          <div className={`p-3 rounded-lg ${colorClasses.icon}`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;