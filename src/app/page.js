'use client'
import styles from '../styles/_page.module.scss'
import PresentationSection from '@/components/presentationSection/PresentationSection'
import CompetenceSection from '@/components/competenceSection/CompetenceSection'
import RealisationsSection from '@/components/realisationsSection/RealisationsSection'
import ContactSection from '@/components/contactSection/ContactSection'
import CvSection from '@/components/cvSection/CvSection'
import { useState } from 'react'

export default function Home() {
  const [state, setState] = useState('__default')

  const activeSection = () => {
    setState(state === '__default' && 'active')
  }

  return (
    <div className={styles.grid}>
      <PresentationSection
        className={`${styles.grid__item} ${styles.presentationSection__default}`}
        onClick={activeSection}
      />
      <CompetenceSection
        className={`${styles.grid__item} ${styles.competenceSection__default}`}
        onClick={activeSection}
      />
      <RealisationsSection
        className={`${styles.grid__item} ${styles.realisationsSection__default}`}
        onClick={activeSection}
      />
      <ContactSection
        className={`${styles.grid__item} ${styles.contactSection__default}`}
        onClick={activeSection}
      />
      <CvSection
        className={`${styles.grid__item} ${styles.cvSection__default}`}
        onClick={activeSection}
      />
    </div>
  )
}
