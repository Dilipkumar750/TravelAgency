import React from 'react';
import { Link } from 'react-router-dom';  // corrected import

const PrivacyPolicy = () => {
  return (
    <>
      <div>
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-5 mb-8 bg-gray-300 h-28 flex justify-center items-center">
            Privacy Policy
          </h2>
        </div>
        <div className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-44 text-justify">
          <div className="w-full">
            <p className="font-extralight mb-7 text-sm sm:text-base md:text-lg">
              Journey Travel & Tours is committed to maintaining the privacy of personal information that you provide to us when using the Journey Travel & Tours website. This Privacy Policy describes how we treat personal information received about you when you visit{' '}
              <strong>www.journeytours.com</strong>. We may make content or services from other websites, including our co-branded websites, available to you from links located on{' '}
              <strong>https://www.journeytours.com</strong>. These other websites are not subject to this Privacy Policy. We recommend that you review the privacy policy at each such website to determine how that site protects your privacy.
            </p>
            <h3 className="text-2xl sm:text-3xl mb-4">Privacy Policy Promise</h3>
            <p className="ml-2 mb-4 font-serif text-sm sm:text-base md:text-lg">
              While information is the cornerstone of our ability to provide superior service, our most important asset is our clients’ trust. Keeping client information secure, and using it only as our clients would want us to, is a top priority for all of us at Journey Travel & Tours. Here then, is our promise to our individual customers:
            </p>

            <ul className="list-disc ml-5 font-extralight text-sm sm:text-base md:text-lg">
              <li>We will safeguard, according to strict standards of security and confidentiality, any information our customers share with us.</li>
              <li>We will limit the collection and use of customer information to the minimum we require to deliver superior service to our customers, which includes advising our customers about our products, services, and other opportunities, and to administer our business.</li>
              <li>We will permit only authorized employees, who are trained in the proper handling of customer information, to have access to that information. Employees who violate our Privacy Promise will be subject to our normal disciplinary process.</li>
              <li>We will not reveal customer information to any external organization unless we have previously informed the customer in disclosures or agreements, or are required by law.</li>
              <li>We will always maintain control over the confidentiality of our customer information. We may, however, share customer information with reputable companies when a customer has expressed an interest in their service or product. Please note that this Privacy Policy does not apply to these other companies’ use of customer information.</li>
              <li>Whenever we hire other organizations to provide support services, we will require them to conform to our privacy standards and to allow us to audit them for compliance.</li>
            </ul>
            <h3 className="text-2xl sm:text-3xl mb-4">Information We Collect</h3>
            <h3 className="text-xl sm:text-2xl mb-4">General:</h3>
            <p className="ml-2 mb-4 font-extralight text-sm sm:text-base md:text-lg">
              When you register, and at other times, we may collect personally identifiable information from you that may include your name, address, telephone number, e-mail address, and facts about your computer. We do not, however, knowingly collect personal information from children under the age of thirteen. In addition, if a user is under 18, unless consent is obtained from your parent/guardian, you are not allowed to provide us with personal information.
            </p>
            <p className="ml-2 mb-4 font-extralight text-sm sm:text-base md:text-lg">
              <strong>Web Site Usage Information:</strong> We automatically collect IP addresses and website usage information from you when you visit our website. This information helps us evaluate how our visitors and customers use and navigate our website on an aggregate basis, including the number and frequency of visitors and customers to each web page, and the length of their visits.
            </p>
            <h3 className="text-xl sm:text-2xl mb-4">Cookies</h3>
            <p className="ml-2 mb-4 font-extralight text-sm sm:text-base md:text-lg">
              We employ cookie technology to help visitors and customers move faster through our site. When you sign on to our website or take advantage of several key features, we may pass cookies to your computer. A cookie is a string of information that is sent by a website and stored on your hard drive or temporarily in your computer’s memory.
            </p>
            <h3 className="text-xl sm:text-2xl mb-4">Internet-based Transfers</h3>
            <p className="ml-2 mb-4 font-extralight text-sm sm:text-base md:text-lg">
              The personally identifiable information we collect about you is stored in limited access servers. We will maintain safeguards to protect the security of these servers and your personally identifiable information.
            </p>
            <h3 className="text-xl sm:text-2xl mb-4">Policy Modifications</h3>
            <p className="ml-2 mb-4 font-extralight text-sm sm:text-base md:text-lg">
              We may change this Privacy Policy from time to time. We will post any changes here, so be sure to check back periodically. However, please be assured that if the Privacy Policy changes in the future, we will not use the personal information you have submitted to us under this Privacy Policy in a manner that is materially inconsistent with this Privacy Policy, without your prior consent.
            </p>
            <h3 className="text-xl sm:text-2xl mb-4">Comments and Questions</h3>
            <p className="ml-2 mb-4 font-mono text-sm sm:text-base md:text-lg">
              If you have any questions, comments, or concerns about our Privacy Policy, please{' '}
              <Link
                to="/Contact"
                className="border-2 border-gray-400 px-4 py-2 mb-8 p-2 rounded-lg text-blue-600 hover:bg-gray-200"
              >
                contact us.
              </Link>
            </p>
            <h2 className="text-center text-3xl sm:text-4xl font-serif mt-8 mb-7 bg-gray-300 w-full h-10">
              Anywhere in the world you want to go... we can get you there!
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
