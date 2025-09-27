import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDownRight, ArrowUpRight, CreditCard, Smartphone, Wallet } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'payment' | 'loan_disbursement' | 'wallet_topup' | 'fee';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  method: 'upi' | 'card' | 'wallet' | 'bank_transfer';
}

const TransactionHistory = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'payment',
      amount: 89,
      description: 'Loan Payment - January',
      date: '2024-01-15',
      status: 'completed',
      method: 'upi'
    },
    {
      id: '2',
      type: 'loan_disbursement',
      amount: 500,
      description: 'Loan Disbursement',
      date: '2024-01-01',
      status: 'completed',
      method: 'bank_transfer'
    },
    {
      id: '3',
      type: 'wallet_topup',
      amount: 50,
      description: 'Wallet Top-up',
      date: '2023-12-28',
      status: 'completed',
      method: 'card'
    },
    {
      id: '4',
      type: 'payment',
      amount: 89,
      description: 'Loan Payment - December',
      date: '2023-12-15',
      status: 'completed',
      method: 'wallet'
    },
    {
      id: '5',
      type: 'fee',
      amount: 2,
      description: 'Processing Fee',
      date: '2023-12-01',
      status: 'completed',
      method: 'wallet'
    }
  ];

  const getTransactionIcon = (type: string, method: string) => {
    if (method === 'upi') return Smartphone;
    if (method === 'card') return CreditCard;
    if (method === 'wallet') return Wallet;
    return ArrowUpRight;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-secondary text-secondary-foreground';
      case 'pending': return 'bg-accent text-accent-foreground';
      case 'failed': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isCredit = (type: string) => type === 'loan_disbursement' || type === 'wallet_topup';

  return (
    <Card className="fintech-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Recent Transactions</span>
          <Badge variant="outline" className="text-xs">
            {transactions.length} transactions
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((transaction) => {
          const IconComponent = getTransactionIcon(transaction.type, transaction.method);
          const credit = isCredit(transaction.type);
          
          return (
            <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  credit ? 'bg-secondary/10' : 'bg-primary/10'
                }`}>
                  {credit ? (
                    <ArrowDownRight className={`w-5 h-5 ${credit ? 'text-secondary' : 'text-primary'}`} />
                  ) : (
                    <ArrowUpRight className={`w-5 h-5 ${credit ? 'text-secondary' : 'text-primary'}`} />
                  )}
                </div>
                
                <div>
                  <p className="font-medium text-sm">{transaction.description}</p>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <IconComponent className="w-3 h-3" />
                    <span className="capitalize">{transaction.method.replace('_', ' ')}</span>
                    <span>•</span>
                    <span>{formatDate(transaction.date)}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right space-y-1">
                <p className={`font-semibold text-sm ${
                  credit ? 'text-secondary' : 'text-foreground'
                }`}>
                  {credit ? '+' : '-'}${transaction.amount}
                </p>
                <Badge className={`${getStatusColor(transaction.status)} text-xs`} variant="secondary">
                  {transaction.status}
                </Badge>
              </div>
            </div>
          );
        })}
        
        <div className="pt-4">
          <button className="w-full text-center text-sm text-primary hover:text-primary/80 transition-colors">
            View All Transactions
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;