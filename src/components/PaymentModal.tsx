import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Smartphone, Wallet, DollarSign, CheckCircle, Clock } from 'lucide-react';

interface PaymentModalProps {
  type: 'loan-payment' | 'wallet-topup';
  amount?: number;
  dueDate?: string;
  children: React.ReactNode;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  type,
  amount: defaultAmount,
  dueDate,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState(defaultAmount?.toString() || '');
  const { toast } = useToast();

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    toast({
      title: "Payment Successful! 💳",
      description: `Your payment of $${amount} has been processed successfully.`,
    });
    
    setIsProcessing(false);
    setIsOpen(false);
  };

  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI Payment',
      icon: Smartphone,
      description: 'Pay via UPI apps like GPay, PhonePe, Paytm',
      processingTime: 'Instant'
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Pay using your bank card',
      processingTime: '2-3 minutes'
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      icon: Wallet,
      description: 'Pay from your digital wallet balance',
      processingTime: 'Instant'
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5" />
            <span>{type === 'loan-payment' ? 'Make Loan Payment' : 'Top Up Wallet'}</span>
          </DialogTitle>
          <DialogDescription>
            {type === 'loan-payment' 
              ? 'Make your monthly loan payment securely' 
              : 'Add money to your digital wallet'
            }
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Payment Amount */}
          <div className="space-y-2">
            <Label htmlFor="amount">
              {type === 'loan-payment' ? 'Payment Amount' : 'Top-up Amount'}
            </Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-10"
                disabled={type === 'loan-payment' && !!defaultAmount}
              />
            </div>
            {dueDate && (
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>Due Date: {dueDate}</span>
              </div>
            )}
          </div>

          {/* Payment Methods */}
          <div className="space-y-3">
            <Label>Select Payment Method</Label>
            <div className="grid gap-3">
              {paymentMethods.map((method) => (
                <Card 
                  key={method.id}
                  className={`cursor-pointer transition-all ${
                    paymentMethod === method.id 
                      ? 'ring-2 ring-primary bg-primary/5' 
                      : 'hover:bg-muted/50'
                  }`}
                  onClick={() => setPaymentMethod(method.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{method.name}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {method.processingTime}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                      {paymentMethod === method.id && (
                        <CheckCircle className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Payment Summary */}
          {amount && paymentMethod && (
            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Amount</span>
                    <span>${amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Processing Fee</span>
                    <span className="text-secondary">Free</span>
                  </div>
                  <div className="flex justify-between font-medium border-t border-border pt-2">
                    <span>Total</span>
                    <span>${amount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              className="flex-1" 
              onClick={handlePayment}
              disabled={!amount || !paymentMethod || isProcessing}
            >
              {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                `Pay $${amount || '0'}`
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;