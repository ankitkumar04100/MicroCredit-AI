import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, DollarSign, TrendingUp } from 'lucide-react';

interface LoanCardProps {
  amount: number;
  interestRate: number;
  term: string;
  monthlyPayment: number;
  status: 'available' | 'applied' | 'approved' | 'active';
  recommended?: boolean;
}

const LoanCard: React.FC<LoanCardProps> = ({
  amount,
  interestRate,
  term,
  monthlyPayment,
  status,
  recommended = false
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-muted text-muted-foreground';
      case 'applied': return 'bg-accent text-accent-foreground';
      case 'approved': return 'bg-secondary text-secondary-foreground';
      case 'active': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getButtonVariant = () => {
    switch (status) {
      case 'available': return recommended ? 'default' : 'outline';
      case 'applied': return 'secondary';
      case 'approved': return 'default';
      case 'active': return 'outline';
      default: return 'outline';
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'available': return 'Apply Now';
      case 'applied': return 'View Application';
      case 'approved': return 'Accept Loan';
      case 'active': return 'Manage Loan';
      default: return 'Learn More';
    }
  };

  return (
    <Card className={`fintech-card ${recommended ? 'ring-2 ring-primary shadow-trust' : ''} relative`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-secondary text-secondary-foreground">
            <TrendingUp className="w-3 h-3 mr-1" />
            Recommended
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">
            ${amount.toLocaleString()} Loan
          </CardTitle>
          <Badge className={getStatusColor(status)} variant="secondary">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-muted-foreground">Interest Rate</p>
              <p className="font-semibold">{interestRate}% APR</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-muted-foreground">Term</p>
              <p className="font-semibold">{term}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-muted-foreground">Monthly Payment</span>
            <span className="text-lg font-bold text-primary">
              ${monthlyPayment.toLocaleString()}
            </span>
          </div>
          
          <Button 
            variant={getButtonVariant()} 
            className="w-full transition-smooth"
            disabled={status === 'applied'}
          >
            {getButtonText()}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanCard;