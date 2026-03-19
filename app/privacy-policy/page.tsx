import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Huong Pho Vietnamese',
  description: 'Privacy Policy for Huong Pho Vietnamese Pte. Ltd. - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
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
              <Link href="/privacy-policy" className="text-orange-600 font-semibold">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-orange-600 transition">
                Terms of Service
              </Link>
              <Link href="/data-deletion" className="text-gray-600 hover:text-orange-600 transition">
                Data Deletion
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        
        <p className="text-gray-600 mb-8">
          <strong>Effective Date:</strong> February 12, 2026<br />
          <strong>Last Updated:</strong> February 12, 2026
        </p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Huong Pho Vietnamese Pte. Ltd. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting your privacy 
              and ensuring the security of your personal information. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our services, including our website and 
              restaurant services.
            </p>
            <p>
              <strong>Contact Information:</strong><br />
              Huong Pho Vietnamese Pte. Ltd.<br />
              121 Carpmael Road, Singapore 429977<br />
              Email: Deqi2012@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
            <p className="mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, delivery address</li>
              <li><strong>Order Information:</strong> Food preferences, order history, delivery instructions</li>
              <li><strong>Payment Information:</strong> Payment method details (processed securely by third-party payment processors)</li>
              <li><strong>Communication Data:</strong> Messages sent through WhatsApp Business, customer service inquiries</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
              <li><strong>Location Data:</strong> Delivery address and general location information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Images and Photos</h3>
            <p className="mb-4">
              <strong>User-Submitted Images:</strong> You may upload or submit photos and images to our platform, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Receipt Photos:</strong> Images of purchase receipts for verification and coupon issuance</li>
              <li><strong>Food Photos:</strong> Images of meals for promotional purposes, reviews, or customer feedback</li>
              <li><strong>Profile Pictures:</strong> Optional profile images for your account</li>
              <li><strong>Promotional Content:</strong> Photos submitted for contests, campaigns, or social media features</li>
            </ul>
            <p className="mb-4">
              <strong>Important:</strong> By uploading images to Huong Pho Vietnamese Pte. Ltd., you grant us permission to process, store, 
              and use these images for the purposes outlined in this Privacy Policy, including automated processing and 
              promotional purposes.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Cookies and similar tracking technologies</li>
              <li>Usage data and analytics</li>
              <li>Website interaction and browsing behavior</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2A. Image Processing and OCR Technology</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Automated Image Processing</h3>
            <p className="mb-4">
              We use <strong>Optical Character Recognition (OCR)</strong> technology and automated image processing to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Extract Receipt Data:</strong> Automatically read and extract information from uploaded receipt photos, including merchant names, purchase amounts, dates, and item details</li>
              <li><strong>Verify Purchases:</strong> Validate receipt authenticity and purchase details for coupon eligibility</li>
              <li><strong>Generate Coupons:</strong> Automatically issue promotional coupons and discounts based on verified purchase data</li>
              <li><strong>Quality Enhancement:</strong> Improve image quality for better readability and processing accuracy</li>
              <li><strong>Data Extraction:</strong> Convert image-based information into structured data for our systems</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Coupon Issuance Logic</h3>
            <p className="mb-4">
              Our automated system processes uploaded receipts to determine coupon eligibility:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Receipt Verification:</strong> OCR technology scans receipts to verify authenticity and extract purchase details</li>
              <li><strong>Eligibility Check:</strong> System automatically checks if the purchase meets coupon criteria (minimum amount, participating merchants, valid dates)</li>
              <li><strong>Automatic Issuance:</strong> Qualifying purchases trigger immediate coupon generation and delivery via WhatsApp or email</li>
              <li><strong>Fraud Prevention:</strong> Duplicate receipt detection prevents multiple coupon claims from the same receipt</li>
              <li><strong>Points Calculation:</strong> Purchase amounts may be converted to loyalty points or rewards automatically</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Promotional Use of Images</h3>
            <p className="mb-4">
              Images you submit may be used for promotional purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Marketing materials and advertisements</li>
              <li>Social media posts and campaigns</li>
              <li>Website galleries and featured content</li>
              <li>Email newsletters and promotional communications</li>
              <li>Customer testimonials and reviews</li>
            </ul>
            <p className="mb-4">
              <strong>Note:</strong> We will not use identifiable personal information from receipts (such as credit card numbers) 
              for promotional purposes. Receipt images are processed solely for verification and coupon issuance.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Image Data Retention</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Receipt Images:</strong> Retained for 90 days after coupon issuance for verification and dispute resolution, then automatically deleted</li>
              <li><strong>Promotional Images:</strong> Retained indefinitely unless you request deletion</li>
              <li><strong>OCR-Extracted Data:</strong> Retained for 2 years for analytics and fraud prevention</li>
              <li><strong>Failed Uploads:</strong> Deleted within 30 days if processing fails</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Rights Regarding Images</h3>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Request deletion of your uploaded images at any time</li>
              <li>Withdraw consent for promotional use of your images</li>
              <li>Request information about how your images are being used</li>
              <li>Opt-out of automated image processing (note: this may prevent coupon issuance)</li>
            </ul>
            <p>
              To exercise these rights, contact us at Deqi2012@gmail.com with your request and image identifiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Order Processing:</strong> To process and fulfill your food orders and deliveries</li>
              <li><strong>Image Processing:</strong> To automatically process uploaded photos using OCR technology for receipt verification and data extraction</li>
              <li><strong>Coupon Generation:</strong> To automatically issue coupons, discounts, and promotional offers based on verified purchase data</li>
              <li><strong>Customer Service:</strong> To respond to your inquiries and provide support</li>
              <li><strong>Communication:</strong> To send order confirmations, updates, and promotional messages</li>
              <li><strong>Promotional Marketing:</strong> To use submitted images in marketing materials, social media, and advertisements (with your consent)</li>
              <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our services</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              <li><strong>Security:</strong> To detect and prevent fraud and unauthorized access</li>
              <li><strong>Fraud Prevention:</strong> To verify receipt authenticity and prevent duplicate coupon claims</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. WhatsApp Communication</h2>
            <p className="mb-4">
              We use <strong>WhatsApp Business API</strong> to communicate with our customers. By providing your 
              phone number and engaging with us through WhatsApp, you consent to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Receiving order confirmations and updates via WhatsApp</li>
              <li>Customer service communications through WhatsApp messaging</li>
              <li>Promotional messages (you can opt-out at any time)</li>
              <li>Delivery notifications and status updates</li>
            </ul>
            <p className="mb-4">
              Your WhatsApp communications with us are subject to WhatsApp&apos;s Terms of Service and Privacy Policy. 
              We only use WhatsApp to enhance customer service and order management.
            </p>
            <p>
              <strong>Note:</strong> You can contact us to opt out of any communications at Deqi2012@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
            <p className="mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> Delivery partners, payment processors, and technology providers</li>
              <li><strong>Business Partners:</strong> Restaurant partners for order fulfillment</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
            </ul>
            <p>
              We do <strong>not</strong> sell your personal information to third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, no method 
              of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in 
              this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Detailed Retention Periods:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Order Data:</strong> Retained for 7 years for accounting, tax compliance, and legal purposes (Singapore regulations)</li>
              <li><strong>Receipt Images:</strong> Deleted automatically 90 days after coupon issuance or verification</li>
              <li><strong>OCR-Extracted Data:</strong> Retained for 2 years for analytics, fraud prevention, and dispute resolution</li>
              <li><strong>Promotional Images:</strong> Retained indefinitely for marketing purposes unless deletion is requested</li>
              <li><strong>WhatsApp Communication Records:</strong> Retained for 2 years for customer service and compliance</li>
              <li><strong>Payment Information:</strong> Tokenized payment data retained for 3 years; full details not stored</li>
              <li><strong>Marketing Data:</strong> Retained until you opt-out or request deletion</li>
              <li><strong>Account Information:</strong> Retained while your account is active and for 1 year after account closure</li>
              <li><strong>Failed Upload Images:</strong> Automatically deleted within 30 days</li>
              <li><strong>Backup Data:</strong> Automatically purged from backup systems within 90 days of deletion from active systems</li>
            </ul>

            <p className="mb-4">
              <strong>Automatic Deletion:</strong> Our systems automatically delete data when retention periods expire. 
              You will receive notifications before automatic deletion of promotional images.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights and Data Deletion</h2>
            <p className="mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Access:</strong> Request access to your personal data, including uploaded images and OCR-extracted information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data, including images and processed data (see detailed instructions below)</li>
              <li><strong>Objection:</strong> Object to processing of your personal data, including automated OCR processing</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service in a structured, commonly used format</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing, image use, or promotional communications at any time</li>
              <li><strong>Image Removal:</strong> Request removal of specific images from promotional materials</li>
              <li><strong>Opt-out of OCR:</strong> Opt-out of automated image processing (may prevent coupon issuance)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Data Deletion Instructions</h3>
            <p className="mb-4">
              You can request deletion of your personal data at any time. We provide multiple convenient methods:
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">📧 Email Request</h4>
              <p className="mb-2">Send an email to: <a href="mailto:Deqi2012@gmail.com?subject=Data Deletion Request" className="text-blue-600 hover:underline">Deqi2012@gmail.com</a></p>
              <p className="text-sm">Subject: &quot;Data Deletion Request&quot;</p>
              <p className="text-sm">Include: Your name, email, phone number, and specific data to delete</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">📸 Instagram Request</h4>
              <p className="mb-2">DM us on Instagram: <a href="https://www.instagram.com/huongphovietnamese" className="text-blue-600 hover:underline">@huongphovietnamese</a></p>
              <p className="text-sm">Send: &quot;I request deletion of my personal data from Huong Pho Vietnamese&quot;</p>
            </div>

            <h4 className="font-semibold mb-2 mt-4">Deletion Timeline:</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-sm">
              <li>Request acknowledged within 24 hours</li>
              <li>Identity verification completed in 2-3 days</li>
              <li>Data deletion processed within 14-30 days</li>
              <li>Confirmation email sent upon completion</li>
            </ul>

            <p className="mb-4">
              <strong>For complete details about the data deletion process, visit our dedicated</strong>&nbsp;
              <a href="/data-deletion" className="text-blue-600 hover:underline font-semibold">Data Deletion Instructions Page</a>.
            </p>

            <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded">
              <strong>Note:</strong> Some data may be retained for legal compliance (e.g., transaction records for tax purposes). 
              Backup copies are automatically purged within 90 days. Receipt images are automatically deleted 90 days after processing.
            </p>

            <p className="mt-4">
              To exercise any of these rights, please contact us at Deqi2012@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect 
              personal information from children. If you believe we have collected information from a child, 
              please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than Singapore. We ensure 
              appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to 
              review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p><strong>Huong Pho Vietnamese Pte. Ltd.</strong></p>
              <p>121 Carpmael Road, Singapore 429977</p>
              <p>Email: <a href="mailto:Deqi2012@gmail.com" className="text-blue-600 hover:underline">Deqi2012@gmail.com</a></p>
              <p>Website: <a href="https://huongpho.com.sg" className="text-blue-600 hover:underline">huongpho.com.sg</a></p>
            </div>
          </section>

          <section className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              By using Huong Pho Vietnamese Pte. Ltd. services, you acknowledge that you have read and understood this Privacy Policy 
              and agree to the collection, use, and disclosure of your information as described herein.
            </p>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}
