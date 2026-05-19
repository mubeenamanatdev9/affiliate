import { Metadata } from "next";
import { Shield, Eye, Lock, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | DealFinder",
  description: "Read DealFinder's privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-deal-bg py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-navy-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-text-secondary">
            Last updated: May 2026
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold text-navy-900">Introduction</h2>
            </div>
            <p className="text-text-secondary leading-relaxed">
              DealFinder (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you visit our website. Please read 
              this policy carefully. If you do not agree with the terms of this privacy policy, please do not access 
              the site.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold text-navy-900">Information We Collect</h2>
            </div>
            <p className="text-text-secondary leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li><strong>Personal Data:</strong> Name, email address, and profile information you voluntarily provide when registering or contacting us.</li>
              <li><strong>Usage Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, browser type, and pages visited.</li>
              <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our site.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold text-navy-900">How We Use Your Information</h2>
            </div>
            <p className="text-text-secondary leading-relaxed mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized 
              experience. Specifically, we may use information collected about you via the site to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li>Create and manage your account.</li>
              <li>Send you email newsletters and promotional materials (with your consent).</li>
              <li>Improve our website and services.</li>
              <li>Respond to your comments, questions, and requests.</li>
              <li>Monitor and analyze usage and trends to improve your experience.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Share2 className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold text-navy-900">Disclosure of Your Information</h2>
            </div>
            <p className="text-text-secondary leading-relaxed mb-4">
              We may share information we have collected about you in certain situations. Your information may be 
              disclosed as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information is necessary to respond to legal process or protect the rights of others.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us, such as payment processing and data analysis.</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 mb-4">Security of Your Information</h2>
            <p className="text-text-secondary leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. 
              While we have taken reasonable steps to secure the personal information you provide to us, please be aware 
              that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 mb-4">Contact Us</h2>
            <p className="text-text-secondary leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at: 
              <a href="mailto:privacy@dealfinder.com" className="text-primary-600 hover:underline ml-1">
                privacy@dealfinder.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
