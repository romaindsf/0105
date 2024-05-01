import styles from '../styles/_page.module.scss'

export default function Home() {
  return (
    <div className={styles.grid}>
      <div className={styles.grid__item}>
        <h2>Présentation</h2>
      </div>
      <div className={styles.grid__item}>
        <h2>Compétences</h2>
      </div>
      <div className={styles.grid__item}>
        <h2>Réseaux Sociaux</h2>
      </div>
      <div className={styles.grid__item}>
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
