import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import CreditScoreRing from '@/components/CreditScoreRing';
import LoanCard from '@/components/LoanCard';
import FinancialLiteracyCard from '@/components/FinancialLiteracyCard';
import StatsCard from '@/components/StatsCard';
import heroImage from '@/assets/fintech-hero.jpg';
import { 
  Smartphone, 
  Shield, 
  TrendingUp, 
  Users, 
  Zap, 
  Award,
  CreditCard,
  PiggyBank,
  BarChart3,
  Globe,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock user data
  const userData = {
    creditScore: 742,
    name: 'Priya Sharma',
    totalLoans: 3,
    activeLoans: 1,
    totalRepaid: 850,
    onTimePayments: 94
  };

  // Mock loans data
  const availableLoans = [
    {
      amount: 500,
      interestRate: 12.5,
      term: '6 months',
      monthlyPayment: 89,
      status: 'available' as const,
      recommended: true
    },
    {
      amount: 1000,
      interestRate: 15.0,
      term: '12 months',
      monthlyPayment: 90,
      status: 'available' as const
    },
    {
      amount: 2000,
      interestRate: 18.5,
      term: '18 months',
      monthlyPayment: 125,
      status: 'available' as const
    }
  ];

  // Mock literacy content
  const literacyLessons = [
    {
      title: 'Understanding Credit Scores',
      description: 'Learn how credit scores work and impact your financial life',
      duration: '15 min',
      difficulty: 'Beginner' as const,
      progress: 100,
      points: 50,
      completed: true,
      category: 'Credit' as const
    },
    {
      title: 'Building Emergency Savings',
      description: 'Essential strategies for creating your financial safety net',
      duration: '20 min',
      difficulty: 'Beginner' as const,
      progress: 65,
      points: 75,
      completed: false,
      category: 'Savings' as const
    },
    {
      title: 'Smart Budgeting Techniques',
      description: 'Master the 50/30/20 rule and other budgeting methods',
      duration: '25 min',
      difficulty: 'Intermediate' as const,
      progress: 0,
      points: 100,
      completed: false,
      category: 'Budgeting' as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-white/10 text-white border-white/20" variant="secondary">
                <Zap className="w-3 h-3 mr-1" />
                AI-Powered Credit Scoring
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Financial Inclusion for the
                <span className="block gradient-text bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text text-transparent">
                  Unbanked
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                Get instant credit scoring using alternative data sources. Access micro-loans, 
                build credit history, and learn financial literacy - all in one app.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-smooth">
                  Get Your Credit Score
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Financial inclusion through mobile banking" 
                className="rounded-2xl shadow-float w-full"
              />
              
              {/* Floating stats */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-card">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-sm">2M+ Users Served</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-card">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-sm">4.9 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Revolutionizing Credit Access
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional credit scoring fails 2.5 billion people worldwide. 
              Our AI analyzes alternative data to provide fair, instant credit assessment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile Data Analysis</h3>
              <p className="text-muted-foreground">
                Analyze call patterns, SMS frequency, and recharge history
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Digital Payments</h3>
              <p className="text-muted-foreground">
                UPI transactions, wallet usage, and bill payment patterns
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Behavioral Signals</h3>
              <p className="text-muted-foreground">
                Savings habits, spending patterns, and financial discipline
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community Trust</h3>
              <p className="text-muted-foreground">
                Peer references and group lending reputation scores
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Financial Dashboard</h2>
            <p className="text-muted-foreground">
              Welcome back, {userData.name}! Here's your financial overview.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="loans">Loans</TabsTrigger>
              <TabsTrigger value="literacy">Learn</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Credit Score Section */}
                <Card className="lg:col-span-1 fintech-card text-center">
                  <CardHeader>
                    <CardTitle>Your Credit Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CreditScoreRing score={userData.creditScore} size="lg" />
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Score improved by <span className="text-secondary font-semibold">+23 points</span> this month
                      </p>
                      <Button variant="outline" className="w-full">
                        View Score Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <StatsCard
                    title="Active Loans"
                    value={userData.activeLoans}
                    subtitle="1 loan in progress"
                    icon={CreditCard}
                    color="primary"
                  />
                  
                  <StatsCard
                    title="Total Repaid"
                    value={`$${userData.totalRepaid}`}
                    subtitle="Across all loans"
                    icon={PiggyBank}
                    trend={{ value: 12, label: 'vs last month' }}
                    color="secondary"
                  />
                  
                  <StatsCard
                    title="On-Time Payments"
                    value={`${userData.onTimePayments}%`}
                    subtitle="Payment reliability"
                    icon={BarChart3}
                    trend={{ value: 2, label: 'improvement' }}
                    color="accent"
                  />
                  
                  <StatsCard
                    title="Credit Utilization"
                    value="23%"
                    subtitle="Healthy usage"
                    icon={Globe}
                    color="muted"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Loans Tab */}
            <TabsContent value="loans" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Available Micro-Loans</h3>
                <p className="text-muted-foreground">
                  Based on your credit score of {userData.creditScore}, here are your loan options:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableLoans.map((loan, index) => (
                  <LoanCard key={index} {...loan} />
                ))}
              </div>
            </TabsContent>

            {/* Financial Literacy Tab */}
            <TabsContent value="literacy" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Build Financial Knowledge</h3>
                <p className="text-muted-foreground">
                  Complete lessons to earn points and improve your credit profile
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {literacyLessons.map((lesson, index) => (
                  <FinancialLiteracyCard key={index} {...lesson} />
                ))}
              </div>
            </TabsContent>

            {/* Insights Tab */}
            <TabsContent value="insights" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="fintech-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-secondary" />
                      <span>Credit Building Tips</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <p className="font-medium">Maintain regular recharges</p>
                        <p className="text-sm text-muted-foreground">
                          Consistent mobile recharges show financial stability
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <p className="font-medium">Pay bills on time</p>
                        <p className="text-sm text-muted-foreground">
                          Utility payments demonstrate responsibility
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <p className="font-medium">Use digital payments</p>
                        <p className="text-sm text-muted-foreground">
                          UPI and wallet transactions build digital footprint
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="fintech-card">
                  <CardHeader>
                    <CardTitle>Recent Activity Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-sm">Electricity bill payment</span>
                      <span className="text-secondary font-medium">+5 points</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-sm">Mobile recharge</span>
                      <span className="text-secondary font-medium">+2 points</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-sm">UPI transaction frequency</span>
                      <span className="text-secondary font-medium">+8 points</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm">Completed financial lesson</span>
                      <span className="text-accent font-medium">+10 points</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Build Your Financial Future?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join millions of users who have unlocked financial opportunities through AI-powered credit scoring
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transition-smooth"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;