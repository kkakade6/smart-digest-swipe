import { useState } from 'react';
import { Check, Star, Zap, Crown, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Subscription() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [plan, setPlan] = useState<'free' | 'pro'>('free');

  const freeFeatures = ['Read 3 stories per day', 'Basic categories', 'Mobile-friendly reading'];

  const proFeatures = [
    'Unlimited daily stories',
    'Full swipe-to-read experience',
    'Daily Digest access',
    'Reading streak tracking',
    'Save articles for later',
    'All news categories',
    'Ad-free experience',
    'Early access to new features',
  ];

  const handleSubscribe = () => {
    // Simulate subscription process
    setIsSubscribed(true);
    setPlan('pro');
  };

  const handleManageSubscription = () => {
    // Open Stripe customer portal or similar
    console.log('Opening subscription management...');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-primary">SmartScroll Pro</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Upgrade Your News Experience</h1>
          <p className="text-muted-foreground">
            Get unlimited access to daily business & tech insights
          </p>
        </div>

        {/* Current Status */}
        {isSubscribed && (
          <div className="bg-gradient-success rounded-xl p-6 text-center mb-8">
            <Check className="w-12 h-12 text-success-foreground mx-auto mb-4" />
            <h2 className="text-xl font-bold text-success-foreground mb-2">
              You're subscribed to SmartScroll Pro!
            </h2>
            <p className="text-success-foreground/90 mb-4">
              Enjoy unlimited access to all features
            </p>
            <Button
              onClick={handleManageSubscription}
              variant="secondary"
              className="bg-success-foreground/10 hover:bg-success-foreground/20 text-success-foreground border-success-foreground/20"
            >
              Manage Subscription
            </Button>
          </div>
        )}

        {/* Pricing Plans */}
        <div className="grid gap-6 mb-8">
          {/* Free Plan */}
          <div
            className={`bg-card border border-card-border rounded-xl p-6 ${plan === 'free' && !isSubscribed ? 'ring-2 ring-primary' : ''}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-card-foreground">Free</h3>
                <p className="text-sm text-muted-foreground">Perfect for casual readers</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-card-foreground">$0</div>
                <div className="text-sm text-muted-foreground">/month</div>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {plan === 'free' && !isSubscribed && (
              <div className="text-center">
                <span className="text-sm font-medium text-primary">Current Plan</span>
              </div>
            )}
          </div>

          {/* Pro Plan */}
          <div
            className={`bg-card border border-card-border rounded-xl p-6 relative ${plan === 'pro' || isSubscribed ? 'ring-2 ring-primary' : ''}`}
          >
            {/* Popular Badge */}
            <div className="absolute -top-3 left-6">
              <div className="bg-gradient-primary px-4 py-1 rounded-full flex items-center space-x-1">
                <Star className="w-3 h-3 text-primary-foreground" />
                <span className="text-xs font-medium text-primary-foreground">Most Popular</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4 pt-2">
              <div>
                <h3 className="text-lg font-bold text-card-foreground">Pro</h3>
                <p className="text-sm text-muted-foreground">For news enthusiasts</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">$1</div>
                <div className="text-sm text-muted-foreground">/month</div>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-card-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {!isSubscribed ? (
              <Button onClick={handleSubscribe} className="w-full">
                <Zap className="w-4 h-4 mr-2" />
                Start Pro ($1/month)
              </Button>
            ) : (
              <div className="text-center">
                <span className="text-sm font-medium text-primary">Current Plan</span>
              </div>
            )}
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="space-y-6 mb-8">
          <h3 className="text-lg font-bold text-foreground text-center">Why upgrade to Pro?</h3>

          <div className="grid gap-4">
            <div className="bg-card border border-card-border rounded-lg p-4 flex items-start space-x-3">
              <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Unlimited Reading</h4>
                <p className="text-sm text-muted-foreground">
                  Read as many stories as you want, no daily limits
                </p>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-4 flex items-start space-x-3">
              <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Streak Tracking</h4>
                <p className="text-sm text-muted-foreground">
                  Build reading habits with gamified daily streaks
                </p>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-4 flex items-start space-x-3">
              <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Premium Experience</h4>
                <p className="text-sm text-muted-foreground">
                  Ad-free reading with early access to new features
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-accent rounded-xl p-6">
          <h3 className="font-semibold text-accent-foreground mb-4">Frequently Asked</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium text-accent-foreground mb-1">Can I cancel anytime?</p>
              <p className="text-muted-foreground">
                Yes, you can cancel your subscription at any time with no questions asked.
              </p>
            </div>
            <div>
              <p className="font-medium text-accent-foreground mb-1">
                What payment methods do you accept?
              </p>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and Apple Pay.
              </p>
            </div>
            <div>
              <p className="font-medium text-accent-foreground mb-1">Is there a free trial?</p>
              <p className="text-muted-foreground">
                Your first month is just $1, making it essentially a trial period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
