import styles from '../../../styles/TeacherFeatures.module.css'

const TeacherFeatures = ({header, para, para2, para3, number, boldPara}) => {
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
        </div>
      </div>
    </div>
  )
}

export default TeacherFeatures
