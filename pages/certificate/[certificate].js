import Certificate1 from '../../components/sections/certificate/Certificate1.js'
import Certificate2 from '../../components/sections/certificate/Certificate2.js'
import Certificate3 from '../../components/sections/certificate/Certificate3.js'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Spinner from '../../components/progress/Spinner'
//snackbar components
import { useSnackbar } from 'notistack';
import showErrorSnackbar from '../../components/snackbar/ErrorSnackbar'

const Certificate = () => {
  const router = useRouter()
  const [teacher, setTeacher] = useState(null)
  const [loading, setLoading] = useState(true)
  const [certificateType, setCertificateType] = useState(null)
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    const fetchCertificate = async () => {
      if(router.query.certificate) {
        const fetchCertificate = await fetch(`https://b2b.develop.edvi.app/certificate/${router.query.certificate}/`);
        const certificateData = await fetchCertificate.json()
        console.log(certificateData)
        if(certificateData && !certificateData.status_code){
          setTeacher(certificateData)
          setLoading(false)
          setCertificateType(certificateData.certificate_type)
        } else if (certificateData.status_code === 404){
          console.log("err")
          showErrorSnackbar(
            enqueueSnackbar,
            'Api is expired',
          );
        }
      }
    }
    fetchCertificate()
  },[router.query.certificate])

  return (
    <div>
      {loading && <Spinner />}
      {!loading
        && teacher
        && certificateType === 'tutor-of-the-day'
        && <Certificate3 teacher={teacher} />}

      {!loading
        && teacher
        && certificateType === 'tutor-of-the-month'
        && <Certificate2 teacher={teacher} />}

      {!loading
        && teacher
        && certificateType === 'tutor-of-the-week'
        && <Certificate1 teacher={teacher} />}

      {!loading
        && teacher
        && certificateType === 'top-rated-tutor-of-the-week'
        && <Certificate2 teacher={teacher} certificateType="Top Rated Tutor of the Week" />}

      {!loading
        && teacher
        && certificateType === 'top-rated-tutor-of-the-month'
        && <Certificate2 teacher={teacher} certificateType="Top Rated Tutor of the Month" />}
    </div>
  )
}

export default Certificate
