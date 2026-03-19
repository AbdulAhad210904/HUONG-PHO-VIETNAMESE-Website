import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Huong Pho Vietnamese',
  description: 'Terms of Service for Huong Pho Vietnamese Pte. Ltd. - Read our terms and conditions for using our restaurant services.',
};

export default function TermsOfService() {
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
              <Link href="/terms" className="text-orange-600 font-semibold">
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
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        
        <p className="text-gray-600 mb-8">
          <strong>Effective Date:</strong> February 12, 2026<br />
          <strong>Last Updated:</strong> February 12, 2026
        </p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Huong Pho Vietnamese Pte. Ltd. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our 
              website and restaurant services (collectively, the &quot;Services&quot;). By accessing 
              or using our Services, you agree to be bound by these Terms.
            </p>
            <p className="mb-4">
              <strong>Service Provider:</strong><br />
              Huong Pho Vietnamese Pte. Ltd.<br />
              121 Carpmael Road, Singapore 429977<br />
              Email: Deqi2012@gmail.com<br />
              Website: <a href="https://huongpho.com.sg" className="text-blue-600 hover:underline">https://huongpho.com.sg</a>
            </p>
            <p>
              If you do not agree to these Terms, please do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
            <p className="mb-4">
              Huong Pho Vietnamese Pte. Ltd. is an authentic Vietnamese restaurant operating in Singapore. Our Services include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Dine-in restaurant services with table service and POS ordering</li>
              <li>Authentic Vietnamese cuisine — Pho, noodles, desserts and more</li>
              <li>Customer support and reservations</li>
              <li>Payment processing at the restaurant</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Account Registration and Use</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Account Creation</h3>
            <p className="mb-4">
              To use certain features of our Services, you may need to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information as necessary</li>
              <li>Keep your account credentials secure and confidential</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Eligibility</h3>
            <p>
              You must be at least 18 years old to use our Services. By using our Services, you represent and 
              warrant that you meet this age requirement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Orders and Payment</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Placing Orders</h3>
            <p className="mb-4">
              When you place an order through Huong Pho Vietnamese:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You make an offer to purchase the selected items</li>
              <li>Order confirmation constitutes our acceptance of your offer</li>
              <li>A binding contract is formed upon confirmation</li>
              <li>You are responsible for providing accurate delivery information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Pricing and Fees</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>All prices are in Singapore Dollars (SGD) and include GST where applicable</li>
              <li>Delivery fees may apply and will be clearly displayed before checkout</li>
              <li>We reserve the right to modify prices at any time</li>
              <li>Price errors will be corrected, and you will be notified</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Payment</h3>
            <p className="mb-4">
              We accept various payment methods including credit/debit cards, digital wallets, and cash on delivery. 
              By providing payment information, you represent that you are authorized to use the payment method.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.4 Order Cancellation</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You may cancel orders before restaurant preparation begins</li>
              <li>Cancellation fees may apply based on order status</li>
              <li>We reserve the right to cancel orders for any reason</li>
              <li>Refunds will be processed according to our refund policy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Delivery</h2>
            <p className="mb-4">
              Delivery times are estimates and not guaranteed. Delays may occur due to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Weather conditions</li>
              <li>Traffic and road conditions</li>
              <li>High order volumes</li>
              <li>Restaurant preparation times</li>
            </ul>
            <p className="mb-4">
              You must be available at the delivery address to receive your order. If you are unavailable after 
              reasonable attempts to contact you, the order may be cancelled without refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Communication</h2>
            <p className="mb-4">
              We may communicate with you via email or Instagram. By engaging with us, you consent to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Receiving reservation confirmations via email</li>
              <li>Customer service communications through email or Instagram DM</li>
              <li>Promotional messages (you may opt-out at any time)</li>
            </ul>
            <p>
              You can opt-out of communications by contacting us at Deqi2012@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. User Conduct</h2>
            <p className="mb-4">You agree NOT to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Use the Services for any illegal purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful code or viruses</li>
              <li>Harass, abuse, or harm other users or our staff</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems to access the Services</li>
              <li>Provide false or misleading information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Food Safety and Allergies</h2>
            <p className="mb-4">
              While we take every care in food preparation, Huong Pho Vietnamese Pte. Ltd. advises that:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Food quality or preparation</li>
              <li>Allergenic ingredients or cross-contamination</li>
              <li>Foodborne illnesses</li>
              <li>Accuracy of restaurant-provided nutritional information</li>
            </ul>
            <p>
              If you have food allergies or dietary restrictions, please contact the restaurant directly before ordering.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Intellectual Property</h2>
            <p className="mb-4">
              All content on our website and Services, including text, graphics, logos, images, and software, is the 
              property of Huong Pho Vietnamese Pte. Ltd. or its licensors and is protected by copyright, trademark, and other intellectual 
              property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Disclaimer of Warranties</h2>
            <p className="mb-4">
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS 
              OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties of uninterrupted or error-free service</li>
              <li>Warranties regarding food quality or safety</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Huong Pho Vietnamese Pte. Ltd. shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly 
              or indirectly.
            </p>
            <p>
              Our total liability shall not exceed the amount paid by you for the specific order giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Huong Pho Vietnamese Pte. Ltd., its affiliates, officers, directors, employees, 
              and agents from any claims, damages, losses, liabilities, and expenses arising out of your use of the 
              Services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Privacy</h2>
            <p>
              Your use of our Services is also governed by our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>. 
              Please review our Privacy Policy to understand our data practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by 
              posting the updated Terms on our website and updating the &quot;Last Updated&quot; date. Your continued use of 
              the Services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Termination</h2>
            <p className="mb-4">
              We may suspend or terminate your access to the Services at any time, with or without cause or notice, 
              including for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Abusive behavior toward staff or delivery personnel</li>
              <li>Excessive order cancellations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Governing Law and Dispute Resolution</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard 
              to conflict of law principles.
            </p>
            <p>
              Any disputes arising out of or relating to these Terms or the Services shall be subject to the exclusive 
              jurisdiction of the courts of Singapore.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Contact Information</h2>
            <p className="mb-4">
              For questions, concerns, or support regarding these Terms or our Services, please contact us:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p><strong>Huong Pho Vietnamese Pte. Ltd.</strong></p>
              <p>121 Carpmael Road, Singapore 429977</p>
              <p>Email: <a href="mailto:Deqi2012@gmail.com" className="text-blue-600 hover:underline">Deqi2012@gmail.com</a></p>
              <p>Website: <a href="https://huongpho.com.sg" className="text-blue-600 hover:underline">https://huongpho.com.sg</a></p>
            </div>
          </section>

          <section className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              By using Huong Pho Vietnamese Pte. Ltd. services, you acknowledge that you have read, understood, and agree to be bound by these 
              Terms of Service. If you do not agree to these Terms, please discontinue use of our Services immediately.
            </p>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}
