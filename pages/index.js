import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import componentsm
import Showcase from '../components/sections/homepage/HomeShowcase'
import CertifiedTutors from '../components/sections/homepage/CertifiedTutorsSection'
import EdviFeatures from '../components/sections/homepage/EdviFeatures'
import Experience from '../components/sections/homepage/Experience'
import BecomeATutor from '../components/sections/homepage/BecomeATutor'
import Faq from '../components/sections/homepage/Faq'
import NeedHelp from '../components/sections/homepage/NeedHelp'
import Blog from '../components/sections/homepage/Blog'
import Testimonials from '../components/sections/homepage/Testimonials'
import Footer from '../components/sections/global/Footer'

export default function Home({url}) {
  return (
    <div>
      <Head>
        <title>Edvi</title>
        <meta name="description" content="edvi-Best Teachers now a click away" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*--- SHOWCASE-SECTION ---*/}
      <Showcase url={url} />
      {/*---CERTIFIED SECTION*/}
      <CertifiedTutors />
      {/*---FEATURES SECTION---*/}
      <EdviFeatures />
      {/*---EXPERIENCE SECTION---*/}
      <Experience />
      {/*---TESTIMONIALS SECTION---*/}
      <Testimonials />
      {/*---BECOME A TUTOR SECTION ---*/}
      <BecomeATutor />
      {/*---FAQ---*/}
      <Faq />
      {/*---NEED HELP SECTION---*/}
      <NeedHelp />
      {/*---FOOTER SECTION---*/}
      <Footer noTopBorder/>
    </div>
  )
}

export async function getStaticProps() {
  const url = process.env.REACT_APP_BASE_URL
	return {
		props: {
			url,
		}
	}
}
