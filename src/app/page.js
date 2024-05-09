import styles from '../styles/_page.module.scss'
import PresentationSection from '@/components/presentationSection/PresentationSection'
import CompetenceSection from '@/components/competenceSection/CompetenceSection'
import RealisationsSection from '@/components/realisationsSection/RealisationsSection'
import ContactSection from '@/components/contactSection/ContactSection'
import CvSection from '@/components/cvSection/CvSection'

export default function Home() {
  return (
    <div className={styles.grid}>
      <PresentationSection
        className={`${styles.grid__item} ${styles.presentationSection__default}`}
      />
      <CompetenceSection
        className={`${styles.grid__item} ${styles.competenceSection__default}`}
      />
      <RealisationsSection
        className={`${styles.grid__item} ${styles.realisationsSection__default}`}
      />
      <ContactSection
        className={`${styles.grid__item} ${styles.contactSection__default}`}
      />
      <CvSection
        className={`${styles.grid__item} ${styles.cvSection__default}`}
      />
    </div>
  )
}
