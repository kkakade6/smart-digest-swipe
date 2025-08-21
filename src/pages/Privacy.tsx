import { Shield, Lock, Eye, Database, Bell, UserCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-primary">Privacy & Security</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Privacy Matters</h1>
          <p className="text-muted-foreground">How we protect and use your data at SmartScroll</p>
        </div>

        {/* Privacy Commitment */}
        <div className="bg-gradient-primary rounded-xl p-6 text-center mb-8">
          <Lock className="w-12 h-12 text-primary-foreground mx-auto mb-3" />
          <h2 className="text-xl font-bold text-primary-foreground mb-3">Privacy-First Approach</h2>
          <p className="text-primary-foreground/90 leading-relaxed">
            We collect only what we need to provide you with a great news reading experience. Your
            data is never sold, and we use industry-standard security practices.
          </p>
        </div>

        {/* What We Collect */}
        <div className="space-y-6 mb-8">
          <h3 className="text-lg font-bold text-foreground">What Information We Collect</h3>

          <div className="space-y-4">
            <div className="bg-card border border-card-border rounded-lg p-4 flex items-start space-x-3">
              <UserCheck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Account Information</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Email address for account creation and subscription management
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Email address (required for login)</li>
                  <li>• Subscription status and preferences</li>
                  <li>• Account creation date</li>
                </ul>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-4 flex items-start space-x-3">
              <Eye className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Reading Activity</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Data about your reading habits to personalize your experience
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Articles read and saved</li>
                  <li>• Reading streaks and progress</li>
                  <li>• Category preferences</li>
                  <li>• Time spent reading (anonymous)</li>
                </ul>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-4 flex items-start space-x-3">
              <Database className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Technical Information</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Basic technical data to ensure the app works properly
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Device type and operating system</li>
                  <li>• App version and performance metrics</li>
                  <li>• Error logs (no personal data)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How We Use Data */}
        <div className="space-y-6 mb-8">
          <h3 className="text-lg font-bold text-foreground">How We Use Your Data</h3>

          <div className="bg-card border border-card-border rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-card-foreground mb-1">Provide the Service</h4>
                  <p className="text-sm text-muted-foreground">
                    Deliver your daily news digest, track reading progress, and manage your
                    subscription
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-card-foreground mb-1">Improve the Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Understand which stories resonate with users to curate better content
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-card-foreground mb-1">Send Important Updates</h4>
                  <p className="text-sm text-muted-foreground">
                    Notify you about your daily digest, subscription changes, or important app
                    updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Don't Do */}
        <div className="space-y-6 mb-8">
          <h3 className="text-lg font-bold text-foreground">What We Don't Do</h3>

          <div className="bg-accent rounded-xl p-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white font-bold">✕</span>
                </div>
                <span className="text-sm text-accent-foreground">
                  Sell your personal data to third parties
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white font-bold">✕</span>
                </div>
                <span className="text-sm text-accent-foreground">
                  Send spam or promotional emails
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white font-bold">✕</span>
                </div>
                <span className="text-sm text-accent-foreground">
                  Track you across other websites or apps
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white font-bold">✕</span>
                </div>
                <span className="text-sm text-accent-foreground">
                  Use your data for advertising targeting
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="space-y-6 mb-8">
          <h3 className="text-lg font-bold text-foreground">How We Protect Your Data</h3>

          <div className="grid gap-4">
            <div className="bg-card border border-card-border rounded-lg p-4 flex items-start space-x-3">
              <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Encryption</h4>
                <p className="text-sm text-muted-foreground">
                  All data is encrypted in transit and at rest using industry-standard protocols
                </p>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-4 flex items-start space-x-3">
              <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Secure Infrastructure</h4>
                <p className="text-sm text-muted-foreground">
                  Hosted on secure cloud platforms with regular security audits and monitoring
                </p>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-4 flex items-start space-x-3">
              <Database className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Data Minimization</h4>
                <p className="text-sm text-muted-foreground">
                  We only collect and store the minimum data necessary to provide our service
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="space-y-6 mb-8">
          <h3 className="text-lg font-bold text-foreground">Your Rights</h3>

          <div className="bg-card border border-card-border rounded-xl p-6">
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-medium text-card-foreground mb-1">Access Your Data</h4>
                <p className="text-muted-foreground">
                  Request a copy of all personal data we have about you
                </p>
              </div>

              <div>
                <h4 className="font-medium text-card-foreground mb-1">Delete Your Data</h4>
                <p className="text-muted-foreground">
                  Request deletion of your account and all associated data
                </p>
              </div>

              <div>
                <h4 className="font-medium text-card-foreground mb-1">Correct Your Data</h4>
                <p className="text-muted-foreground">
                  Update or correct any inaccurate personal information
                </p>
              </div>

              <div>
                <h4 className="font-medium text-card-foreground mb-1">Export Your Data</h4>
                <p className="text-muted-foreground">
                  Download your reading history and preferences in a portable format
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-accent rounded-xl p-6 text-center">
          <Bell className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="font-semibold text-accent-foreground mb-2">Questions About Privacy?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            We're here to help. Contact us about any privacy concerns or to exercise your data
            rights.
          </p>
          <p className="text-xs text-muted-foreground">
            privacy@smartscroll.app • Response within 48 hours
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Last updated: January 15, 2024 • SmartScroll Privacy Policy v1.0
          </p>
        </div>
      </div>
    </div>
  );
}
