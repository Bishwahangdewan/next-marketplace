import styles from '../../../styles/Certificate3.module.css'
import Left from '../../../public/certificate/certificate2-left.webp'
import Right from '../../../public/certificate/certificate2-right.webp'
import CertificateBg from '../../../public/certificate/certificate-bg.webp'
import Logo from '../../../public/certificate/logo.svg'

const Certificate3 = () => {
  return (
    <div className={styles.container}>
      <img className={styles.left} src={Left.src} />
      <img className={styles.right} src={Right.src} />

      <div className={styles.container_inner}>
        <img className={styles.bg} src={CertificateBg} />
        <div className={styles.logo_container}>
          <Logo />
        </div>

        <div className="title-container">
          <h1 className="title-header">Certificate</h1>
          <p className="title-para">Tutor of the day</p>
        </div>

        <div className="content-container">
          <p className="content-para-big">This Certificate is Proudly Presented too</p>
          <h1 className="content-header">Harshit Malik</h1>

          <p className="content-para-small">for teaching Maths subjects to students till grade 12th of IGCSE & CBSE</p>
          <p className="content-para-small">Board and helping them get best results</p>

          <p className="content-para-bold">15 September, 2022</p>

          <button>edvi.app</button>
        </div>

        <div className="content-footer">
          <div className="footer-logo-container">
            <img src="./assets/footer2.webp" />
          </div>

          <p className="footer-para">The largest private tutoring company</p>
        </div>
      </div>
    </div>
  )
}

export default Certificate3
