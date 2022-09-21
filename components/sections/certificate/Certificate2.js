import GoldenBorder from '../../../public/certificate/certificate-golden-border.webp'
import BlueBottom from '../../../public/certificate/certificate-bottom-blue.webp'
import BgCertificate from '../../../public/certificate/certificate-bg.webp'
import styles from '../../../styles/Certificate2.module.css'
import Logo from '../../../public/certificate/logo.svg'
import FooterLogo from '../../../public/certificate/footer2-logo.webp'

const Certificate2 = () => {
  return (
    <div className={styles.container}>
      <img className={styles.golden_border} src={GoldenBorder.src} />
      <img className={styles.blue_bottom} src={BlueBottom.src} />
      <img className={styles.bg} src={BgCertificate.src} />
      <div className={styles.container_inner}>
        <div className={styles.logo_container}>
          <Logo />
        </div>

        <div className={styles.title_container}>
          <h1 className={styles.title_header}>Certificate</h1>
          <p className={styles.title_para}>Tutor of the month</p>
        </div>

        <div className={styles.content_container}>
          <p className={styles.content_para_big}>This Certificate is Proudly Presented too</p>
          <h1 className={styles.content_header}>Satya Nand Singh</h1>

          <p className={styles.content_para_small}>for teaching Maths & Physics subjects to students till grade 12th of</p>
          <p className={styles.content_para_small}>IGCSE Board and helping them get best results</p>

          <p className={styles.content_para_bold}>15 September, 2022</p>

          <button className={styles.button}>edvi.app</button>
        </div>

        <div className={styles.content_footer}>
          <div className={styles.footer_logo_container}>
            <img src={FooterLogo.src} />
          </div>

          <p className={styles.footer_para}>The largest private tutoring company</p>
        </div>
      </div>
    </div>
  )
}

export default Certificate2
