export default function gdprcomliance() {
  return (
    <section className="bg-gray-50 py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6">
      <div className="max-w-5xl mx-auto bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-sm">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
          GDPR Compliance
        </h1>

        {/* Intro */}
        <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Zervia Tech Solutions is committed to complying with the General Data
          Protection Regulation (GDPR) for users located in the European
          Economic Area (EEA). We ensure that personal data is processed
          lawfully, transparently, and for specific purposes, maintaining the
          highest standards of data protection and privacy.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
          We process personal data only when we have a valid legal basis. This
          may include your consent when you explicitly provide permission,
          contractual necessity when processing is required to deliver our
          services, legal obligations to comply with applicable laws, and
          legitimate interests to improve our services and enhance user
          experience.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-200 my-5 sm:my-6"></div>

        {/* Content */}
        <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          If you are located in the EEA, you have certain rights regarding your
          personal data. These include the right to access your data, request
          corrections or updates, request deletion of your data (also known as
          the “right to be forgotten”), restrict how your data is processed,
          receive your data in a structured and portable format, and object to
          specific types of data processing. We retain personal data only for as
          long as necessary to fulfill business, legal, or operational
          requirements. Once the data is no longer needed, it is securely
          deleted or anonymized to ensure your privacy is maintained. In cases
          where personal data is transferred outside the EEA, we implement
          appropriate safeguards such as Standard Contractual Clauses (SCCs),
          secure cloud infrastructure, and partnerships with trusted service
          providers that comply with GDPR requirements. We take data security
          seriously and implement industry-standard measures including
          encryption of sensitive data, secure servers, controlled access, and
          regular monitoring and updates to protect against unauthorized access
          or breaches. Where data processing is based on your consent, you have
          the right to withdraw that consent at any time without affecting the
          lawfulness of any processing carried out prior to withdrawal. You also
          have the right to lodge a complaint with your local data protection
          authority if you believe your personal data is not being handled in
          accordance with GDPR regulations.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          For any GDPR-related requests, including access, correction, or deletion of your data, you can contact us at
          <span className="text-[#632e87] underline cursor-pointer ml-1 break-all">
            contactus@zerviatech.com
          </span>
        </p>
      </div>
    </section>
  );
}