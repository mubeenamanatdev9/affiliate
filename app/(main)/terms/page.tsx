import { Metadata } from "next";
import { FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | DealFinder",
  description: "Read DealFinder's terms of service to understand the rules and regulations for using our website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-deal-bg py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-navy-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-text-secondary">
            Last updated: May 2026
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold text-navy-900">Agreement to Terms</h2>
            </div>
            <p className="text-text-secondary leading-relaxed">
              By accessing or using DealFinder (&quot;the Site&quot;), you agree to be bound by these Terms of Service. 
              If you disagree with any part of the terms, you may not access the Site. These Terms apply to all 
              visitors, users, and others who access or use the Site.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold text-navy-900">Use of the Site</h2>
            </div>
            <p className="text-text-secondary leading-relaxed mb-4">
              You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to 
              use the Site:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>To transmit any material that is defamatory, obscene, indecent, abusive, offensive, or inflammatory.</li>
              <li>To impersonate or attempt to impersonate DealFinder, a DealFinder employee, or another user.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold text-navy-900">Intellectual Property Rights</h2>
            </div>
            <p className="text-text-secondary leading-relaxed">
              The Site and its entire contents, features, and functionality (including but not limited to all 
              information, software, text, displays, images, video, and audio) are owned by DealFinder, its licensors, 
              or other providers of such material and are protected by United States and international copyright, 
              trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold text-navy-900">Disclaimer of Warranties</h2>
            </div>
            <p className="text-text-secondary leading-relaxed">
              The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis. DealFinder makes no representations or 
              warranties of any kind, express or implied, as to the operation of the Site or the information, content, 
              materials, or products included on the Site. You expressly agree that your use of the Site is at your 
              sole risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 mb-4">Limitation of Liability</h2>
            <p className="text-text-secondary leading-relaxed">
              In no event shall DealFinder, its directors, employees, partners, agents, suppliers, or affiliates be 
              liable for any indirect, incidental, special, consequential, or punitive damages, including without 
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access 
              to or use of or inability to access or use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 mb-4">Governing Law</h2>
            <p className="text-text-secondary leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of the United States, without 
              regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms 
              will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 mb-4">Changes to Terms</h2>
            <p className="text-text-secondary leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
              is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect. 
              What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 mb-4">Contact Us</h2>
            <p className="text-text-secondary leading-relaxed">
              If you have any questions about these Terms, please contact us at:
              <a href="mailto:legal@dealfinder.com" className="text-primary-600 hover:underline ml-1">
                legal@dealfinder.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
