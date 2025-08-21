import { Clock, Target, Zap, Users, Heart, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/smartscroll-hero.jpg';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-primary-foreground">S</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">About SmartScroll</h1>
          <p className="text-muted-foreground">Your daily 5-minute business & tech news digest</p>
        </div>

        {/* Hero Image */}
        <div className="mb-8">
          <img
            src={heroImage}
            alt="SmartScroll app interface showing news cards on mobile device"
            className="w-full h-48 object-cover rounded-xl shadow-card"
          />
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-primary rounded-xl p-6 text-center mb-8">
          <h2 className="text-xl font-bold text-primary-foreground mb-3">Our Mission</h2>
          <p className="text-primary-foreground/90 leading-relaxed">
            We believe staying informed shouldn't be overwhelming. SmartScroll delivers the most
            important business and technology news in just 5 minutes a day, helping you stay ahead
            without the information overload.
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-6 mb-8">
          <h3 className="text-lg font-bold text-foreground">Why SmartScroll?</h3>

          <div className="grid gap-4">
            <div className="bg-card border border-card-border rounded-lg p-4 flex items-start space-x-3">
              <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">5-Minute Daily Digest</h4>
                <p className="text-sm text-muted-foreground">
                  Carefully curated stories that give you the essential information without the
                  fluff
                </p>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-4 flex items-start space-x-3">
              <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">
                  "Why It Matters" Context
                </h4>
                <p className="text-sm text-muted-foreground">
                  Every story includes our signature "Why it matters" section to help you understand
                  the bigger picture
                </p>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-4 flex items-start space-x-3">
              <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">
                  Swipe-to-Read Experience
                </h4>
                <p className="text-sm text-muted-foreground">
                  Intuitive mobile-first design that makes reading news feel natural and engaging
                </p>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-4 flex items-start space-x-3">
              <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">
                  Built for Busy Professionals
                </h4>
                <p className="text-sm text-muted-foreground">
                  Perfect for entrepreneurs, investors, and anyone who needs to stay informed
                  efficiently
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-card border border-card-border rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold text-card-foreground mb-4">Our Story</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              SmartScroll was born from a simple frustration: staying informed about business and
              technology news was taking too much time and mental energy. We were spending hours
              scrolling through endless feeds, trying to separate signal from noise.
            </p>
            <p>
              So we built something better. A focused, intelligent news experience that respects
              your time and helps you build consistent reading habits. No clickbait, no endless
              scrolling—just the stories that matter, presented clearly and concisely.
            </p>
            <p>
              Today, thousands of professionals rely on SmartScroll to stay informed in just 5
              minutes a day.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-6 mb-8">
          <h3 className="text-lg font-bold text-foreground">Our Values</h3>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Quality over Quantity</h4>
                <p className="text-sm text-muted-foreground">
                  We'd rather give you 8 great stories than 80 mediocre ones
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Respect Your Time</h4>
                <p className="text-sm text-muted-foreground">
                  Every feature is designed to help you read smarter, not longer
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">No Bias, Just Facts</h4>
                <p className="text-sm text-muted-foreground">
                  We focus on business impact and technological innovation, not political agendas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-accent rounded-xl p-6 text-center">
          <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="font-semibold text-accent-foreground mb-2">Have Feedback?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            We'd love to hear from you. Your input helps us make SmartScroll better for everyone.
          </p>
          <Button variant="outline" size="sm">
            <Mail className="w-4 h-4 mr-2" />
            Contact Us
          </Button>
        </div>

        {/* Version Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            SmartScroll v1.0 • Made with care for busy professionals
          </p>
        </div>
      </div>
    </div>
  );
}
