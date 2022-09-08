import styles from '../../../styles/TeacherFeatures.module.css'
//import Icons
import LaunchIcon from '@mui/icons-material/Launch';

const TeacherFeatures = ({header, para, para2, para3, para4, para5, para6, para7, number, boldPara, withLink}) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.number__container}>
          <h2 className={styles.number}>{number}</h2>
        </div>
      </div>

      <div className={styles.right}>
        <h3 className={styles.header}>{header}</h3>

        <div className={styles.para__container}>
          {withLink && (
            <p className={styles.para}>
              Visit
              <a href="https://edvi.app/teacher" target="_blank" rel="noreferrer">
                <span style={{color:'#3458a1'}}> teachers.edvi.app</span>
                <LaunchIcon sx={{position:'relative',top:'5px', fontSize:'20px', color:'#3458a1'}} />
              </a>
              &nbsp;and fill out the form
            </p>
          )}
          <p className={styles.para}>{para}</p>
          <p
            style={{
              color:boldPara? '#3458a1': '#666',
              fontWeight:boldPara? 'bold': 'normal',
              fontSize: boldPara? '22px': '18px',
              marginTop: boldPara? '4px': '0px',
            }}
            className={styles.para}>{para2 ? para2 : ''}</p>
          <p className={styles.para}>{para3 ? para3 : ''}</p>
          <p className={styles.para}>{para4 ? para4 : ''}</p>
          <p className={styles.para}>{para5 ? para5 : ''}</p>
          <p className={styles.para}>{para6 ? para6 : ''}</p>
          <p className={styles.para}>{para7 ? para7 : ''}</p>
        </div>
      </div>
    </div>
  )
}

export default TeacherFeatures
