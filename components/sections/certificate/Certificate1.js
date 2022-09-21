import Logo from '../../../public/certificate/logo.svg'
import Border from '../../../public/certificate/border.png'
import Background from '../../../public/certificate/background.webp'
import FooterLogo from '../../../public/certificate/footer-logo.webp'
import styles from '../../../styles/Certificate1.module.css'
import domtoimage from 'dom-to-image';
import {useRef} from 'react'

const Certificate1 = () => {
  const domRef= useRef(null)
  const handleDownload = () => {
    console.log(domRef.current)
    domtoimage.toPng(domRef.current, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'certificate.jpeg';
        link.href = dataUrl;
        link.click();
    });
  }

  return (
    <div>
    <div ref={domRef}>
    <div style={{
      backgroundImage: `url(${Border.src})`,
    }} className={styles.container}>
      <div style={{
        backgroundImage: `url(${Background.src})`,
      }} className={styles.container_inner}>
        <div className={styles.logo_container}>
          <Logo />
        </div>

        <div className={styles.title_container}>
          <h1 className={styles.title_header}>Certificate</h1>
          <p className={styles.title_para}>Tutor of the week</p>
        </div>

        <div className={styles.content_container}>
          <p className={styles.content_para_big}>This Certificate is Proudly Presented too</p>
          <h1 className={styles.content_header}>Kanika Sehgal</h1>

          <p className={styles.content_para_small}>for teaching Maths subjects to students till grade 12th of IGCSE & CBSE</p>
          <p className={styles.content_para_small}>Board and helping them get best results</p>

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
      </div>

      <div style={{textAlign:'center',marginTop:'20px'}}>
        <button onClick={handleDownload} style={{cursor:'pointer'}} className={styles.button}>Download Certificate</button>
      </div>
    </div>
  )
}

export default Certificate1
