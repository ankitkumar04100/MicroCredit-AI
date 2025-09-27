import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Calculator, Clock, DollarSign, FileText, ShieldCheck } from 'lucide-react';

interface LoanApplicationModalProps {
  loanAmount: number;
  interestRate: number;
  term: string;
  monthlyPayment: number;
  children: React.ReactNode;
}

const LoanApplicationModal: React.FC<LoanApplicationModalProps> = ({
  loanAmount,
  interestRate,
  term,
  monthlyPayment,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    purpose: '',
    income: '',
    employment: '',
    phone: '',
    address: '',
    emergencyContact: '',
    emergencyPhone: '',
    bankAccount: '',
    consent: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted Successfully! 🎉",
      description: `Your loan application for $${loanAmount.toLocaleString()} has been submitted. You'll receive an update within 24 hours.`,
    });
    
    setIsSubmitting(false);
    setIsOpen(false);
    setStep(1);
    setFormData({
      purpose: '',
      income: '',
      employment: '',
      phone: '',
      address: '',
      emergencyContact: '',
      emergencyPhone: '',
      bankAccount: '',
      consent: false
    });
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Loan Amount</p>
              <p className="font-bold">${loanAmount.toLocaleString()}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-secondary" />
            <div>
              <p className="text-sm text-muted-foreground">Monthly Payment</p>
              <p className="font-bold">${monthlyPayment}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="purpose">Loan Purpose *</Label>
          <Select value={formData.purpose} onValueChange={(value) => handleInputChange('purpose', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select loan purpose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="business">Small Business</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="medical">Medical Emergency</SelectItem>
              <SelectItem value="home">Home Improvement</SelectItem>
              <SelectItem value="wedding">Wedding Expenses</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="income">Monthly Income *</Label>
            <Input
              id="income"
              type="number"
              placeholder="Enter monthly income"
              value={formData.income}
              onChange={(e) => handleInputChange('income', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="employment">Employment Type *</Label>
            <Select value={formData.employment} onValueChange={(value) => handleInputChange('employment', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select employment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="salaried">Salaried</SelectItem>
                <SelectItem value="self-employed">Self-Employed</SelectItem>
                <SelectItem value="freelancer">Freelancer</SelectItem>
                <SelectItem value="business">Business Owner</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button 
          onClick={() => setStep(2)} 
          disabled={!formData.purpose || !formData.income || !formData.employment}
        >
          Next Step
        </Button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Mobile Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Complete Address *</Label>
          <Textarea
            id="address"
            placeholder="Enter your complete address"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
            <Input
              id="emergencyContact"
              placeholder="Contact person name"
              value={formData.emergencyContact}
              onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
            <Input
              id="emergencyPhone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.emergencyPhone}
              onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bankAccount">Bank Account Number *</Label>
          <Input
            id="bankAccount"
            placeholder="Account number for disbursement"
            value={formData.bankAccount}
            onChange={(e) => handleInputChange('bankAccount', e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setStep(1)}>
          Previous
        </Button>
        <Button 
          onClick={() => setStep(3)}
          disabled={!formData.phone || !formData.address || !formData.emergencyContact || !formData.emergencyPhone || !formData.bankAccount}
        >
          Review Application
        </Button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <FileText className="w-5 h-5 mr-2" />
          Application Summary
        </h3>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Loan Amount</p>
            <p className="font-semibold">${loanAmount.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Interest Rate</p>
            <p className="font-semibold">{interestRate}% APR</p>
          </div>
          <div>
            <p className="text-muted-foreground">Term</p>
            <p className="font-semibold">{term}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Monthly Payment</p>
            <p className="font-semibold">${monthlyPayment}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Loan Purpose</p>
            <p className="font-semibold capitalize">{formData.purpose}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Monthly Income</p>
            <p className="font-semibold">${formData.income}</p>
          </div>
        </div>
      </Card>

      <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
        <input 
          type="checkbox" 
          id="consent" 
          checked={formData.consent}
          onChange={(e) => handleInputChange('consent', e.target.checked)}
          className="mt-1"
        />
        <div className="text-sm">
          <label htmlFor="consent" className="font-medium cursor-pointer">
            I agree to the terms and conditions *
          </label>
          <p className="text-muted-foreground mt-1">
            I consent to MicroCredit AI accessing my mobile usage patterns, utility payment history, 
            and digital payment data for credit assessment purposes.
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setStep(2)}>
          Previous
        </Button>
        <Button 
          onClick={handleSubmit}
          disabled={!formData.consent || isSubmitting}
          className="min-w-[120px]"
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Submitting...</span>
            </div>
          ) : (
            <>
              <ShieldCheck className="w-4 h-4 mr-2" />
              Submit Application
            </>
          )}
        </Button>
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Calculator className="w-5 h-5" />
            <span>Loan Application</span>
          </DialogTitle>
          <DialogDescription>
            Complete your loan application in {step === 1 ? 'Basic Information' : step === 2 ? 'Contact Details' : 'Review & Submit'}
          </DialogDescription>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= num ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                {num}
              </div>
              {num < 3 && (
                <div className={`w-12 h-0.5 mx-2 ${
                  step > num ? 'bg-primary' : 'bg-muted'
                }`} />
              )}
            </div>
          ))}
        </div>

        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </DialogContent>
    </Dialog>
  );
};

export default LoanApplicationModal;