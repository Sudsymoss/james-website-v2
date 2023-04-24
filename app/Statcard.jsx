import styles from './statscard.module.css'
export default function StatsCard(data) {
    return (
        <>
            <div className={styles.stats_card}>
                <div className={styles.stats_card_title}>
                    <p className={styles.stats_card_titletext}>
                        {data.title}
                    </p>
                    {data.precent ? (
                        <p className={data.precent.startsWith('-') ? styles.stats_card_percent_red : styles.stats_card_percent_green}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor" height="20" width="20">
                                <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                                </path>
                            </svg> {data.precent}
                        </p>
                    ) : ('')}

                </div>
                <div className={styles.stats_card_data}>
                    <p>
                        {data.body}
                    </p>
                    {data.precent ? (
                        <>
                        {parseFloat(data.precent) >= 101 ? (
                            <div className={styles.stats_card_range}>
                            <div style={{ width: data.precent.startsWith('-') ? data.precent.substring(1) : data.precent }} className={styles.stats_card_fill_red}>
                            </div>
                        </div>
                        ):(
                            <div className={styles.stats_card_range}>
                            <div style={{ width: data.precent.startsWith('-') ? data.precent.substring(1) : data.precent }} className={styles.stats_card_fill_green}>
                            </div>
                        </div>
                        )}
                        
                        </>
                    ) : ('')}

                </div>
            </div>
        </>
    )
}