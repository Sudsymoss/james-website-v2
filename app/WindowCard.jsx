import styles from './Window-card.module.css'
export default function WinCard({children}){
    return(
        <>
            <div className={styles.window_card}>
              <div className={styles.window_card_tools}>
                <div className={styles.win_crd_circle}>
                  <span className={`${styles.win_crd_red} ${styles.win_crd_box}`}></span>
                </div>
                <div className={styles.win_crd_circle}>
                  <span className={`${styles.win_crd_yellow} ${styles.win_crd_box}`}></span>
                </div>
                <div className={styles.win_crd_circle}>
                  <span className={`${styles.win_crd_green} ${styles.win_crd_box}`}></span>
                </div>
              </div>
              <div className={styles.win_crd_card__content}>

                {children}

              </div>
            </div>
        </>
    )
}