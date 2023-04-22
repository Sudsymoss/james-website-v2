import styles from './Notice.module.css'
export default async function notice() {
    return (
        <div className={styles.main}>
            <div className={styles.notice} id="notice">
                <div className={styles.msg}>
                <h2>MAJOR SYSTEMS OUTAGE. Downtime: unknown at this time</h2>
                </div>
            </div>
        </div>
    )
}