import styles from './Load.module.css'
export default function Loading() {
  return (
    <div className={styles.main}>
      <div className={styles.loader}>
    <span className={styles.bar}></span>
    <span className={styles.bar}></span>
    <span className={styles.bar}></span>
      </div>
    </div>
  )
}