import Logo from '../../../public/certificate/logo.svg'
import Border from '../../../public/certificate/border.png'
import Background from '../../../public/certificate/background.webp'
import FooterLogoWeek from '../../../public/certificate/footer-logo.webp'
import FooterLogoMonth from '../../../public/certificate/footer2-logo.webp'
import styles from '../../../styles/Certificate1.module.css'
import domtoimage from 'dom-to-image';
import {useRef} from 'react'
import { list, getMonth } from '../../../globals/GlobalFunctions'

const Certificate1 = ({teacher, certificateType}) => {
  const domRef= useRef(null)
  const handleDownload = () => {
    console.log(domRef.current)
    domtoimage.toPng(domRef.current, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = dataUrl;
        link.click();
    });
  }

  return (
    <div style={{textAlign:'center'}}>
    <div ref={domRef} style={{display:'inline-block'}}>
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
          {certificateType ?
            <p className={
              certificateType === 'Top Rated Tutor of the Week'
              ? styles.title_para_new
              : styles.title_para_month}>
                {certificateType}
            </p>
            : <p className={styles.title_para}>Tutor of the Week</p>}
        </div>

        <div className={styles.content_container}>
          <p className={styles.content_para_big}>This Certificate is Proudly Presented too</p>
          <h1 className={styles.content_header}>{teacher.teacher.name}</h1>

          <p className={styles.content_para_small}>for teaching {list(teacher.subject)} subjects to students of grade {list(teacher.standard)} of {list(teacher.board)} {teacher.board.includes('MP Board') || teacher.board.includes('UP Board') ? '' : 'Board' } and helping them get best results</p>

          <p className={styles.content_para_bold}>{teacher.awarded_on.split('-')[2]} {getMonth(teacher.awarded_on.split('-')[1])}, {teacher.awarded_on.split('-')[0]}</p>

          <button className={styles.button}>edvi.app</button>
        </div>

        <div className={styles.content_footer}>
          <div className={
            certificateType === 'Top Rated Tutor of the Month'
            ? styles.footer_logo_container_month
            : styles.footer_logo_container}>
          {certificateType === 'Top Rated Tutor of the Week' ? <img src={FooterLogoWeek.src} />
          : certificateType === 'Top Rated Tutor of the Month' ? <img src={FooterLogoMonth.src} />
          : <img src={FooterLogoWeek.src} />}
          </div>

          <p className={styles.footer_para}>The largest private tutoring company</p>
        </div>
      </div>
    </div>
      </div>

      <div className={styles.button_container} style={{textAlign:'center',marginTop:'20px'}}>
        <button onClick={handleDownload} style={{cursor:'pointer'}} className={styles.button}>Download</button>
      </div>
    </div>
  )
}

export default Certificate1
