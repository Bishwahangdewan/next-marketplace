import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/TermsAndConditions.module.css'
//import components
import Header from '../components/sections/global/Header'
import Footer from '../components/sections/global/Footer'
//import breakpoints
import useBreakpoints from '../hooks/useBreakpoints'

export default function PrivacyPolicy() {
  const { md } = useBreakpoints()
  return (
    <div>
      <div className={styles.showcase__container}>
        {/*---HEADER---*/}
        <Header />

        {/*--ROUNDED-BG-IMAGE--*/}
        <div className={styles.showcase__bgImg}>
          <Image
            src="/static-images/HomePageShowcaseBg.png"
            width={500}
            height={500}
            alt="showcaseBg"
            loading="lazy"
          />
        </div>

        <div className={styles.showcase__content}>
          <h1 className={styles.showcase__header}>Privacy Policy</h1>
          <p className={styles.showcase__para}>Policy documents</p>
        </div>
      </div>

      {/*---Content---*/}
      <div className={styles.content}>
        <div className={styles.content__container}>
          <div className={styles.para__container}>
            <p className={styles.para}>These Terms of Use are effective as of May 28, 2021.</p>
            <p className={md ? styles.para : styles.para__header}>1. Introduction</p>
            <p className={styles.para}>We at Yellow Lambda Technologies Private Limited (hereinafter referred to as “edvi”) understand and are concerned about the privacy of the data and information of the Users accessing the website – ‘https://edvi.app’ or mobile application- ‘edvi’ and the other associated/ancillary applications, products, websites and services managed by edvi. As educators and enablers of education, we believe it our duty to and treat your privacy with the utmost respect.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>In this Privacy Policy, unless otherwise specified, the Website and Mobile App of edvi are hereinafter collectively referred to as “Platform”. In this Privacy Policy, the terms “the Company”, “we”, “our” and “us” refers to edvi and “you”, “your”, “User” and/or “Users” refers to the user of the Platform.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>This Policy forms an electronic contract within the provisions of the Information Technology Act, 2000 (“IT Act”), the rules made thereunder and the amended provisions pertaining to electronic documents/records in various statutes as amended by the IT Act, from time to time. This Policy is a legally binding document between the User and edvi. The terms of this Policy will be effective upon the User’s acceptance of the same (directly or indirectly in electronic form, by clicking on the “I accept the Privacy Policy” tab or by use of the Website) and will govern the relationship between the User and edvi. This Privacy Policy does not require any physical, electronic or digital signature.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>The information collected from you could be categorized as “Personal Information”, “Sensitive Personal Information” and “Associated Information”. Personal Information, Sensitive Personal Information and Associated Information (each as individually defined under the Data Protection Rules) shall collectively be referred to as “Information” or “Personal Information” or “Personal Data” in this Policy..</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>Our Platform is for teachers and students. You must be 18 years of age or older to visit or use the Website and/or Application in any manner. If you are under the age of 18, you should review this Privacy Policy with your parent or legal guardian to make sure that you and your parent or legal guardian understands and agrees to it and further, if required, you shall perform or undertake such activities which will entitle you to enter into a legally binding agreement with the Company. By visiting this Website and/or Application or accepting this Privacy Policy, you represent and warrant to the Company that you are 18 years of age or older, and that you have the right, authority and capacity to use the Website and/or Application and agree to and abide by this Privacy Policy. You also represent and warrant to the Company that you will use this Privacy Policy in a manner consistent with any and all applicable laws and regulations.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>Your visit and use of platform for student engagement, content delivery, administration tools, digital learning solutions through video conferencing, collaboration, and related services, support, professional services offered on the Platform (hereinafter collectively referred to as “Services”) are subject to this Privacy Policy and other terms and conditions of the Platform. This Privacy Policy ensures our firm commitment to your privacy vis-à-vis the protection of your information. In the event the terms and conditions of the Policy are not agreeable to the User, the User is requested to refrain from using this Website.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>Our Privacy Policy governs your use of the Services on the Platform, and explains how we collect, safeguard and disclose information that results from your use of the Service. We reserve the right to amend and supplement to complete this Privacy Policy at any time. Whenever there is a change to our Privacy Policy, we post updates on our Website and/or Application. We encourage you to regularly review this Privacy Policy to get the latest updates to ensure you know and exercise the right to manage your Personal Information. Please read this Privacy Policy carefully. By using the Platform, you indicate, agree and acknowledge that you understand, agree and consent to this Privacy Policy and to the collection and use of information in accordance with this Privacy Policy.</p>
          </div>
        </div>

        <div className={styles.content__container}>
          <div className={styles.para__container}>
            <p className={md ? styles.para : styles.para__header}>2. Definitions</p>
            <p className={styles.para}>Unless otherwise defined elsewhere in this Privacy Policy, the following terms shall have the meanings assigned to them as herein below for the purposes of this Privacy Policy:</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>“COOKIES” mean small data files stored on your device (computer or mobile device).</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>“DATA CONTROLLER” means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any Personal Data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>“DATA PROCESSORS” OR “SERVICE PROVIDERS” means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>“PERSONAL DATA” means data which includes, but is not limited to:</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>(i) Email address</p>
            <p className={styles.para}>(ii) First name and last name</p>
            <p className={styles.para}>(iii) Phone number</p>
            <p className={styles.para}>(iv) Address, Country, State, Province, ZIP/Postal/Pin code, City</p>
            <p className={styles.para}>(v) Other contact information</p>
            <p className={styles.para}>(vi) Gender and other demographics</p>
            <p className={styles.para}>(vii) Date of birth and age</p>
            <p className={styles.para}>(viii) Location Data</p>
            <p className={styles.para}>(ix) Cookies and Usage Datar</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>“USAGE DATA” means information and data collected and captured as a result of the use of Service.</p>
          </div>
        </div>

        <div className={styles.content__container}>
          <div className={styles.para__container}>
            <p className={md ? styles.para : styles.para__header}>3. Representation And Warrants</p>
            <p className={styles.para}>Every User hereby represents and warrants to edvi that:</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>(a) all Information provided by the User is true, correct, current and updated;</p>
            <p className={styles.para}>(b) all Information provided by the User and the provision of such Information by the User does not in any manner violate any third-party agreement, law, decree, order or judgement;</p>
            <p className={styles.para}>(c) all Information provided by the User does not belong to any third party, and if it does belong to a third party, the User is duly authorized by such Third Party to use, access and disseminate such Information;</p>
            <p className={styles.para}>(d) the officers, directors, contractors or agents of edvi shall not be responsible in any manner whatsoever with regard to the authenticity or veracity of the Information that a User may provide to the Website; and</p>
            <p className={styles.para}>(e) the User shall indemnify and hold harmless edvi and each of its officers, directors, contracts or agents and any third party relying on the Information provided by the User in the event the User is in breach of this Policy.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>(a) it shall not collect the User’s sensitive personal data unless such sensitive personal data is collected for a lawful purpose for which such collection of data is necessary;</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>(a) it shall not collect the User’s sensitive personal data unless such sensitive personal data is collected for a lawful purpose for which such collection of data is necessary;</p>
            <p className={styles.para}>(b) it shall not retain any sensitive personal data for longer than such sensitive personal data is required or can be lawfully used;</p>
            <p className={styles.para}>(c) in the event edvi collects Information directly from the User, edvi shall make reasonable effort to apprise the User of the purpose of such collection of Information, the intended recipient of the Information and the details of the agencies collecting and retaining the Information; and</p>
            <p className={styles.para}>(d) it has in place the security practices and procedures prescribed under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (“IT Rules”).</p>
          </div>
        </div>

        <div className={styles.content__container}>
          <div className={styles.para__container}>
            <p className={md ? styles.para : styles.para__header}>4. Data Collection And Use</p>
            <p className={styles.para}>4.1. Collection of Data</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>In order to avail the Services under the Platform, registration by the User is mandatory. A valid email address would be required to register on the Platform. To complete the registration process, a verification link would be sent to you on the email address provided by you at the time of registration for the purpose of user validation.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>You are fully responsible for all activities that occur under your account. You specifically agree that the Company shall not be responsible for unauthorized access to or alteration of your transmissions or data, any material or data sent or received or not sent or received through the Platform. By registering, you consent to provide information including Personal Data.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>The Company respects the privacy of the Users of the Services and is committed to reasonably protect it in all respects. The information about the user as collected by the Company are:</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>i) Information supplied by Users</p>
            <p className={styles.para}>ii) Information automatically tracked while navigation</p>
            <p className={styles.para}>iii) Inferred information through usage and log data</p>
            <p className={styles.para}>iv) Information collected from any other sources (like third party providers or social media platforms)</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>In order to provide Services and to maintain and improve the Platform, we require certain information (including Personal Data) and may obtain your Personal Data when you register with us, when you express an interest in obtaining information about us or our products and Services, when you participate in activities on our Platform or otherwise contact us. Such Personal Data may be collected in various ways including during the course of your:</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>a) Registration as a User on the Platform;</p>
            <p className={styles.para}>b) Availing Services offered on the Platform. Instances of such Services include but are not limited to, communicating with the Company customer service by phone, email or otherwise or posting user reviews in relation to Services/products available on the Platform;</p>
            <p className={styles.para}>c) Granting permission to share credentials of your online accounts maintained with third parties. We may receive Personal Data about you from such third parties, including commercially available sources and business partners. If you access the Platform through a connect a service on the Platform, the information we collect may include your information available through such connected service.</p>
          </div>
        </div>

        <div className={styles.content__container}>
          <div className={styles.para__container}>
            <p className={styles.para}>4.2. Types of Data Collected</p>
            <p className={styles.para}>We collect different types of information, including Personal Data, for various purposes to provide and improve our Service for you.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>Personal Data</p>
            <p className={styles.para}>While using our Service, we may ask you to provide us with certain Personal Data i.e., personally identifiable information that can be used to contact or identify you. We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>Usage Data</p>
            <p className={styles.para}>We may also collect information that your browser sends whenever you visit our Platform and/or use the Service or when you access the Platform by or through any device (“Usage Data”).This Usage Data may include information such as server log, your computer’s Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
            <p className={styles.para}>When you access the Platform with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>Location Data</p>
            <p className={styles.para}>We may use and store information about your location if you give us permission to do so (“Location Data”). We use this data to provide features of our Service, to improve and customize our Service.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>Tracking Cookies Data</p>
            <p className={styles.para}>We use cookies and similar tracking technologies to track the activity on our Platform and we hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyse our Service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>Examples of Cookies we use:</p>
            <p className={styles.para}>i) Session Cookies: We use Session Cookies to operate our Service.</p>
            <p className={styles.para}>ii) Preference Cookies: We use Preference Cookies to remember your preferences and various settings</p>
            <p className={styles.para}>iii) Security Cookies: We use Security Cookies for security purposes.</p>
            <p className={styles.para}>iv) Advertising Cookies: Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>Other Data</p>
            <p className={styles.para}>We may also collect the following information and data: place of birth, passport details, citizenship, registration at place of residence and actual address, telephone number (work, mobile), details of documents on education, qualification, professional training, employment agreements, non-disclosure agreements, information on bonuses and compensation, information on marital status, family members, social security (or other taxpayer identification) number, office location, photograph, information regarding your transactions on the Platform, (including purchase history), your financial information such as bank account information or credit card or debit card or other payment instrument details and other data.</p>
          </div>
        </div>

        <div className={styles.content__container}>
          <div className={styles.para__container}>
            <p className={styles.para}>4.3. Purpose for Collection and Use of Data</p>
            <p className={styles.para}>We collect different types of information, including Personal Data, for various purposes to provide and improve our Service for you.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>Personal Data</p>
            <p className={styles.para}>All required information is Service dependent and the Company may use the above said user Information to, maintain, protect, and improve the Services (including advertising) and for developing new services. Any Personal Data provided by you will not be considered as sensitive if it is freely available and / or accessible in the public domain like any comments, messages, blogs, scribbles available on social platforms like Facebook, Instagram, Twitter, etc.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>The Company uses the collected data for various purposes including as follows:</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>a) To create and maintain an online account with the Platform;</p>
            <p className={styles.para}>b) To maintain our Platform and enable you to avail the Services;</p>
            <p className={styles.para}>c) To notify you about changes to our Service;</p>
            <p className={styles.para}>d) To allow you to participate in interactive features of our Service when you choose to do so;</p>
            <p className={styles.para}>e) To provide customer support;</p>
            <p className={styles.para}>f) To analyse information so that we can improve our Platform and Services;</p>
            <p className={styles.para}>g) To notify the necessary information related to the Platform and Services and your online account on the Platform from time to time;</p>
            <p className={styles.para}>h) To monitor your usage of our Platform and Services;</p>
            <p className={styles.para}>i) To maintain records and provide you with an efficient, safe and customized experience while using the Platform;</p>
            <p className={styles.para}>j) To detect, prevent and address technical issues;</p>
            <p className={styles.para}>k) To furnish your information to Service Providers to the extent necessary for delivering the relevant Services;</p>
            <p className={styles.para}>l) Aggregated and individual, anonymized and non-anonymized data may periodically be transmitted to Service Providers to help us improve the Platform and our Services;</p>
            <p className={styles.para}>m) To fulfil any other purpose for which you provide it;</p>
            <p className={styles.para}>n) To verify your identity and prevent fraud or other unauthorized or illegal activity;</p>
            <p className={styles.para}>o) To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;</p>
            <p className={styles.para}>p) To provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.</p>
            <p className={styles.para}>q) To dispatch transaction-related communications such as welcome letters, billing reminders, and purchase confirmations;</p>
            <p className={styles.para}>r) To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;</p>
            <p className={styles.para}>s) In any other way we may describe when you provide the information;</p>
            <p className={styles.para}>t) To provide aggregate statistics about Users, traffic patterns, and other related information to reputable third parties, however this information when disclosed will be in an aggregate form and does not contain any of personally identifiable information;</p>
            <p className={styles.para}>u) To comply with applicable laws, rules, and regulations; and</p>
            <p className={styles.para}>v) For any other purpose with your consent.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>You agree that we may use Personal Information about you or share the same with third party service provider to improve our marketing and promotional efforts, to analyse site usage, improve the Platform’s content and Service offerings, and customise the Platform’s content, layout, and Services. These uses improve the Platform and better tailor it to meet your needs, so as to provide you with an efficient, safe and customized experience while using the Platform. It is clarified that the third-party service provider shall not have right with respect to your Personal Information and shall only use the Personal Information for the limited purpose for which it has been provided or retain the same for purposes of compliance of applicable law or in complete anonymized form for analytical purposes. Such third-party service provider may store the Personal Information in the servers located in India or outside India.</p>
          </div>
        </div>

        <div className={styles.content__container}>
          <div className={styles.para__container}>
            <p className={styles.para}>4.4. Retention of Data</p>
            <p className={styles.para}>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>We reserve the right to retain the aggregated and anonymized data derived from the Personal Data collected from the users of the Platform including your Personal Data, for any purposes (commercial and non-commercial) as the Company deem fit and proper.</p>
          </div>
        </div>

        <div className={styles.content__container}>
          <div className={styles.para__container}>
            <p className={styles.para}>4.5. Withdrawal of Consent</p>
            <p className={styles.para}>You may withdraw your consent given for collecting any Information and Personal Data under this Privacy Policy and pursuant to use of the Services, at any time by sending an email to support@edvi.app. In such an event, we reserve the right to not allow you further usage of the Platform (including the Website and the Application) or provide/use any Services thereunder, without any obligations or liability, whatsoever, whether in contract, tort, law, equity or otherwise, in this regard.</p>
          </div>
        </div>
      </div>

      <div className={styles.content__container}>
        <div className={styles.para__container}>
          <p className={md ? styles.para : styles.para__header}>5. Disclosure of Data</p>
          <p className={styles.para}>We may disclose Personal Data that we collect, or you provided on our Platform as follows:</p>
        </div>

        <div className={styles.para__container}>
          <p className={styles.para}>5.1. Disclosure for Law Enforcement and other legal necessity.</p>
          <p className={styles.para}>We reserve the right to use or disclose your Personal Data in response to any statutory or legal requirements. We will use and disclose your Personal Data if we believe you will harm the property or our rights or right of the other Users of our Platform. Finally, we will use or disclose your Personal Data if we believe it is necessary to share information in order to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person or property, violations of the Platform’s other policies, or as otherwise required by law when responding to subpoenas, court orders and other legal processes.</p>
        </div>

        <div className={styles.para__container}>
          <p className={styles.para}>5.2. Business Transaction</p>
          <p className={styles.para}>If we or our subsidiaries are involved in a merger, acquisition or asset sale, and/or in the event the ownership or control of our Platform changes, we may transfer your information to the new owner.</p>
        </div>

        <div className={styles.para__container}>
          <p className={styles.para}>5.3. Disclosure by the User</p>
          <p className={styles.para}>When you use certain features on the Platform like the discussion forums and you post or share your Personal Information as comments, messages, files, photos on such discussion forums on the Platform, which is freely accessible to group of other users and/or the public, the same will be available to all such users and/or public. All such sharing of information will be done at your own risk. Please keep in mind that if you disclose Personal Information in posting as comments, messages, files, photos on the discussion forums on the Platform, such information may become publicly available. You agree that we shall not be liable for any breach of privacy of Personal Information or loss incurred by your disclosure of your own or any other person’s or entity’s data.</p>
        </div>

        <div className={styles.para__container}>
          <p className={styles.para}>5.4. Other Disclosures</p>
          <p className={styles.para}>We may also disclose your Personal Data as follows.</p>
        </div>

        <div className={styles.para__container}>
          <p className={styles.para}>i) to our subsidiaries and affiliates;</p>
          <p className={styles.para}>ii) to contractors, Service Providers, and other third parties we use to support our business in compliance with the provisions of this Privacy Policy;We may also disclose your Personal Data as follows.</p>
          <p className={styles.para}>iii) to fulfil the purpose for which you provide it;</p>
          <p className={styles.para}>iv) for the purpose of including your institution / company’s logo on our website;</p>
          <p className={styles.para}>v) for any other purpose disclosed by us when you provide the information; and</p>
          <p className={styles.para}>vi) with your consent in any other cases.</p>
        </div>
      </div>

      <div className={styles.content__container}>
        <div className={styles.para__container}>
          <p className={md ? styles.para : styles.para__header}>6. Grievance Redressal</p>
          <p className={styles.para}>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
        </div>

        <div className={styles.para__container}>
          <p className={styles.para}>The User may report violation of breach of privacy, Personal Data or identify theft or grievances in relation to the Personal Data shared, collected, stored or disseminated by edvi_ in relation to the Platform, by sending an email at support@edvi.app.</p>
        </div>
      </div>

      <div className={styles.content__container}>
        <div className={styles.para__container}>
          <p className={md ? styles.para : styles.para__header}>7. Links to Other Sites</p>
          <p className={styles.para}>Our Platform may contain links to third party websites and mobile applications that are not operated by us. If you click such link, you may be directed to such third party’s websites and mobile applications. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party websites and mobile applications or any services offered by such third parties. You agree that we shall not be liable for any breach of your privacy of Personal Information or loss incurred by your use of such websites or services.</p>
        </div>
      </div>

      <div className={styles.content__container}>
        <div className={styles.para__container}>
          <p className={md ? styles.para : styles.para__header}>8. Changes to this Privacy Policy</p>
          <p className={styles.para}>This Privacy Policy will remain in effect except with respect to any changes in its provisions in the future. We reserve the right to update or change our Privacy Policy at any time and you are advised to review this Privacy Policy periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page, which will be in effect immediately after being posted on this page.</p>
        </div>

        <div className={styles.para__container}>
          <p className={styles.para}>Your continued use of the Platform and our Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
        </div>
      </div>

      <div className={styles.content__container}>
        <div className={styles.para__container}>
          <p className={md ? styles.para : styles.para__header}>9. Protection of Our Intellectual Property</p>
          <p className={styles.para}>You hereby agree that edvi is an intellectual property of the Company and that all materials on the Platform are protected by copyright laws, trademark laws, and other intellectual property laws. Any unauthorized use of any such information or materials may violate copyright laws, trademarks laws, intellectual property laws, and other laws and regulations.</p>
        </div>
      </div>

      <div className={styles.content__container}>
        <div className={styles.para__container}>
          <p className={md ? styles.para : styles.para__header}>10. Governing Law and Jurisdiction</p>
          <p className={styles.para}>In the event of any dispute arising between the parties with respect to this Privacy Policy, the same shall be referred to the sole arbitrator and the arbitration shall be in accordance with Arbitration and Conciliation Act, 1996. The language of arbitration proceeding shall be English. The seat and place of arbitration shall be New Delhi, India and the decision of the Arbitrator shall be final and binding on both parties herein. This contract shall be subject to the exclusive jurisdiction of courts in New Delhi, India and shall be governed by the Indian laws.</p>
        </div>
      </div>

      <div className={styles.content__container}>
        <div className={styles.para__container}>
          <p className={md ? styles.para : styles.para__header}>11. Contact Us</p>
          <p className={styles.para}>If you have any questions about this Privacy Policy, please contact us by email: support@edvi.app.</p>
        </div>
      </div>

      {/*---FOOTER---*/}
      <Footer />
    </div>
  )
}
