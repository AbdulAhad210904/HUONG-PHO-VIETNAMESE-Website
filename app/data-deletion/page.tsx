import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Deletion Request | Huong Pho Vietnamese',
  description: 'Request deletion of your personal data from Huong Pho Vietnamese Pte. Ltd. Learn how to submit a data deletion request and our process.',
};

export default function DataDeletion() {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-orange-600 hover:text-orange-700 transition text-sm font-medium">
              ← Back to Home
            </Link>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-orange-600 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-orange-600 transition">
                Terms of Service
              </Link>
              <Link href="/data-deletion" className="text-orange-600 font-semibold">
                Data Deletion
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Data Deletion Request</h1>
        
        <p className="text-gray-600 mb-8">
          <strong>Last Updated:</strong> February 12, 2026
        </p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Right to Data Deletion</h2>
            <p className="mb-4">
              At Huong Pho Vietnamese Pte. Ltd., we respect your privacy and your right to control your personal data. If you wish to 
              have your personal information deleted from our systems, you can submit a data deletion request following 
              the instructions below.
            </p>
            <p>
              This page explains how to request deletion of your data, what information will be deleted, and how long 
              the process takes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Data Can Be Deleted?</h2>
            <p className="mb-4">
              When you request data deletion, we will remove the following information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, delivery addresses</li>
              <li><strong>Account Information:</strong> Login credentials, account preferences, saved settings</li>
              <li><strong>Order History:</strong> Past orders and transaction details (subject to legal retention requirements)</li>
              <li><strong>Communication Records:</strong> WhatsApp messages, customer service interactions</li>
              <li><strong>Payment Information:</strong> Saved payment methods and billing details</li>
              <li><strong>Marketing Data:</strong> Newsletter subscriptions and marketing preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data We May Retain</h2>
            <p className="mb-4">
              Please note that certain data may be retained for legal, regulatory, or legitimate business purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Legal Compliance:</strong> Transaction records required for tax and accounting purposes (up to 7 years as required by Singapore law)</li>
              <li><strong>Fraud Prevention:</strong> Information necessary to prevent fraud and abuse</li>
              <li><strong>Dispute Resolution:</strong> Records related to ongoing disputes or legal claims</li>
              <li><strong>Backup Systems:</strong> Data in backup systems (automatically purged after 90 days)</li>
            </ul>
            <p>
              After the required retention period, this data will be securely deleted or anonymized.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Request Data Deletion</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Method 1: Email Request</h3>
              <p className="mb-4">Send an email to our data privacy team:</p>
              <div className="bg-white p-4 rounded">
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:Deqi2012@gmail.com?subject=Data Deletion Request" className="text-blue-600 hover:underline">Deqi2012@gmail.com</a></p>
                <p className="mb-2"><strong>Subject Line:</strong> Data Deletion Request</p>
              </div>
              
              <div className="mt-4">
                <p className="font-semibold mb-2">Please include the following information in your email:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your full name</li>
                  <li>Email address associated with your account</li>
                  <li>Phone number used for orders/WhatsApp communication</li>
                  <li>Any additional account identifiers (if applicable)</li>
                  <li>Specific data you want deleted (or &quot;all personal data&quot;)</li>
                  <li>Reason for deletion (optional but helpful)</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Method 2: Instagram DM</h3>
              <p className="mb-4">Send a direct message to our Instagram account:</p>
              <div className="bg-white p-4 rounded">
                <p className="mb-2"><strong>Instagram:</strong> <a href="https://www.instagram.com/huongphovietnamese" className="text-blue-600 hover:underline">@huongphovietnamese</a></p>
                <p className="mb-2"><strong>Message Template:</strong></p>
                <p className="text-sm italic bg-gray-50 p-3 rounded">
                  &quot;I would like to request deletion of my personal data from Huong Pho Vietnamese. 
                  My name is [Your Name] and my registered email is [Your Email].&quot;
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Deletion Process Timeline</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Request Received (Day 1)</h3>
                  <p>We receive your data deletion request and send an acknowledgment email within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Identity Verification (Days 2-3)</h3>
                  <p>We verify your identity to ensure the security of your data. You may receive a verification email or phone call.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Data Review (Days 4-7)</h3>
                  <p>We review your data to identify what can be immediately deleted and what must be retained for legal compliance.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Data Deletion (Days 8-14)</h3>
                  <p>We permanently delete your personal data from our active systems and mark retention data for automated deletion.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Confirmation (Day 14-30)</h3>
                  <p>You receive a confirmation email that your data deletion request has been completed.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="font-semibold text-yellow-800">⏱️ Total Processing Time: 14-30 days</p>
              <p className="text-sm text-yellow-700 mt-2">
                Most requests are completed within 14 days. Complex cases may take up to 30 days to fully process.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Important Considerations</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">⚠️ Account Closure</h3>
                <p>
                  Deleting your data will result in permanent closure of your Huong Pho Vietnamese account. You will not be 
                  able to access past orders, saved addresses, or preferences.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🔄 Data Cannot Be Recovered</h3>
                <p>
                  Once your data is deleted, it cannot be recovered. If you wish to use our services again, you will 
                  need to create a new account.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">📧 Pending Orders</h3>
                <p>
                  If you have pending orders, we recommend waiting until they are completed before requesting data deletion. 
                  Active orders may delay the deletion process.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">💳 Outstanding Payments</h3>
                <p>
                  Any outstanding payments or refunds must be settled before data deletion can be completed.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative: Data Download</h2>
            <p className="mb-4">
              If you want to keep a copy of your data before deletion, you can request a data export. This will provide 
              you with a downloadable file containing all your personal information.
            </p>
            <p>
              To request a data export, send an email to <a href="mailto:Deqi2012@gmail.com?subject=Data Export Request" className="text-blue-600 hover:underline">Deqi2012@gmail.com</a> with 
              the subject line &quot;Data Export Request&quot;.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions or Concerns?</h2>
            <p className="mb-4">
              If you have any questions about the data deletion process or need assistance with your request, 
              please don&apos;t hesitate to contact us:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="font-bold text-lg mb-3">Huong Pho Vietnamese Pte. Ltd. — Data Privacy Team</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href="mailto:Deqi2012@gmail.com" className="text-blue-600 hover:underline">Deqi2012@gmail.com</a></p>
                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/huongphovietnamese" className="text-blue-600 hover:underline">@huongphovietnamese</a></p>
                <p><strong>Address:</strong> 121 Carpmael Road, Singapore 429977</p>
                <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM SGT</p>
              </div>
            </div>
          </section>

          <section className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/privacy-policy" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                <h3 className="font-semibold text-blue-900 mb-2">📋 Privacy Policy</h3>
                <p className="text-sm text-blue-700">Learn how we collect, use, and protect your personal information.</p>
              </a>
              <a href="/terms" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition">
                <h3 className="font-semibold text-green-900 mb-2">📄 Terms of Service</h3>
                <p className="text-sm text-green-700">Read our terms and conditions for using Huong Pho Vietnamese services.</p>
              </a>
            </div>
          </section>

          <section className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
            <h3 className="font-bold text-xl mb-3 text-gray-900">✅ We&apos;re Here to Help</h3>
            <p className="text-gray-700">
              Your privacy is important to us. We&apos;re committed to processing your data deletion request promptly 
              and securely. If you need any assistance or have questions about the process, our team is ready to help.
            </p>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}
