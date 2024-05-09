import styles from '../styles/_page.module.scss'
import PresentationSection from '@/components/presentationSection/presentationSection'

export default function Home() {
  return (
    <div className={styles.grid}>
      <PresentationSection
        className={`${styles.grid__item} ${styles.presentationSection}`}
      />

      <div className={`${styles.grid__item} ${styles.competenceSection}`}>
        <h2>Compétences</h2>
      </div>
      <div className={`${styles.grid__item} ${styles.socialSection}`}>
        <h2>Réseaux Sociaux</h2>
      </div>
      <div className={`${styles.grid__item} ${styles.realisationsSection}`}>
        <h2>Réalisations</h2>
      </div>
      <div className={styles.grid__item}>
        <h2>Contact</h2>
      </div>
      <div className={styles.grid__item}>
        <h2>CV</h2>
      </div>
    </div>
  )
}
