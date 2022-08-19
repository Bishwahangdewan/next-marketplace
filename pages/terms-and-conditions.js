import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/TermsAndConditions.module.css'
//import components
import Header from '../components/sections/global/Header'
import Footer from '../components/sections/global/Footer'

export default function TermsAndConditions() {
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
          />
        </div>

        <div className={styles.showcase__content}>
          <h1 className={styles.showcase__header}>Terms and Conditions</h1>
          <p className={styles.showcase__para}>Policy documents</p>
        </div>
      </div>

      {/*---Content---*/}
      <div className={styles.content}>
        <div className={styles.content__container}>
          <div className={styles.para__container}>
            <p className={styles.para}>These Terms of Use are effective as of May 28, 2021.</p>
            <p className={styles.para}>1. Introduction</p>
            <p className={styles.para}>Welcome to https://edvi.app/ (edvi). edvi is owned and operated by Yellow Lambda Technologies Private Limited (hereinafter referred to as “Company” / “We” / “Us” / “Our”), a company incorporated under the laws of India. We enable and facilitate the dissemination of education by way of bringing together in one platform student engagement, content delivery, administration tools and a wide range of services relating to education technology including the features on our Platform. For the purposes of these Terms and Conditions of Use and Access (“Terms of Use” / “Terms of Service” / “T&C”), accessing of the Website and the mobile platforms together with any tuition education material, videos, online tests, made available or disseminated or uploaded therein or downloaded therefrom, including all information, tools and services made available shall hereinafter be collectively be referred to as the “Services”. This Terms of Use governs your access to and use of every content, functionality and/or Services offered on or through edvi.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>In this Terms of Services, &quot;you&quot;, &quot;your&quot;, “User” and/or “Users” refers to the user of the Platform. Our Platform is for the users intending to avail the Services. You must be 18 years of age or older to visit or use the Website and/or Application in any manner. If you are under the age of 18, you should review this Privacy Policy with your parent or legal guardian to make sure that you and your parent or legal guardian understand and agree to it and further, if required, you shall perform or undertake such activities which will entitle you to enter into a legally binding agreement with the Company.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>By visiting this Website and/or Application or accepting this T&C, you represent and warrant to the Company that you are 18 years of age or older, and that you have the right, authority and capacity to use the Website and/or Application and agree to and abide by this T&C. You also represent and warrant to the Company that you will use this T&C in a manner consistent with any and all applicable laws and regulations.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>This Terms of Service is an electronic record in the form of an electronic contract formed under the Information Technology Act, 2000, rules made thereunder, and any other applicable statutes, as amended from time to time. This Terms of Services does not require any physical, electronic or digital signature.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>By your (You or Your) accessing, browsing and/or use of edvi, You accept and agree to comply with and be bound by these Terms of Use and Our privacy policy (accessible at https://edvi.app/terms & https://edvi.app/privacy-policy ) (“Privacy Policy”) (the Terms of Use and Privacy Policy shall together be referred to as “Agreements”). By accessing our Platform, You agree and acknowledge that You are bound by the terms contained in the Agreements. Please read these Terms of Use carefully before proceeding. You declare Your willingness to abide and be bound by these Terms of Use throughout Your use of edvi. If You do not agree with the Terms of Use, please do not use edvi.</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>These Terms of Use (which may be updated at the sole discretion of the Company without intimation) will be effective immediately upon Your acceptance of Our terms and conditions, Your use of edvi being indicative of such acceptance. These Agreements shall be enforceable against You in the same manner as any other written agreement.</p>
          </div>
        </div>

        <div className={styles.content__container}>
          <div className={styles.para__container}>
            <p className={styles.para}>2. Definitions</p>
            <p className={styles.para}>Capitalized terms used and not otherwise defined in this Agreement or its schedules have the meanings set forth below:</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>“Access Credentials” shall mean the credentials that are used to access edvi by those users who have entered into a separate agreement with Us for the same. This also includes the access codes/invite links generated by edvi from time to time;</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>“Content” means text, graphics, photographs, audio, video (including live videos), documentation, presentations and/or other content including any information and data;</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>“User Content” means Content that is transmitted, uploaded or stored on the Platform by You and in connection with the use of the Services;</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>“Confidential Information” shall mean any confidential or proprietary information, of a Party, in any form, including but not limited to the information relating to the such Party’s Content that is not in public domain which when disclosed is:</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>(a) marked as confidential</p>
            <p className={styles.para}>(b) is identified as confidential at the time of disclosure; or</p>
            <p className={styles.para}>(c) that is manifestly of a confidential nature. Confidential Information shall not include information that is:</p>

            <div className={styles.para__inner}>
              <p className={styles.para}>(i) publicly available prior to this Agreement and/or is made publicly available by the disclosing Party without restriction;</p>
              <p className={styles.para}>(ii) rightfully received by the receiving Party from third parties without accompanying confidentiality obligations;</p>
              <p className={styles.para}>(iii) already in the receiving Party’s possession and was lawfully received from sources other than the disclosing Party; and</p>
              <p className={styles.para}>(iv) independently developed by the receiving Party outside of this Agreement;</p>
            </div>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>“Device” shall mean any smartphone, computer equipment, tablet computer, smartwatch and includes any device capable of being used by You to access and use the Services;</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>“Enrol”, “Enrolment” and “Enrolled” shall mean the accessing of the Platform by You by entering the Access Credentials and/or any other information as may be required for such Enrolment by Us from time to time. You may Enrol on the Platform as a ‘Teacher’ or a ‘Student’ provided however, any Enrolment by You shall be conditional to Your fulfilling the Eligibility Criteria under Paragraph 4;</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>“Effective Date” shall mean the earlier of the date on which You first access the Platform or the date of Enrolment;</p>
          </div>

          <div className={styles.para__container}>
            <p className={styles.para}>“Licensor Content” means Content that is made available by Wise to the You in connection with the Services.</p>
          </div>

        </div>
      </div>

      {/*---FOOTER---*/}
      <Footer />
    </div>
  )
}
