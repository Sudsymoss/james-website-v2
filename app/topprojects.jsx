import styles from './TP.module.css'
import Link from 'next/link'
export default function topProjects(){
    return(
        <div className={styles.container}>
            <div className={styles.title}><h3>Some of my projects</h3></div>
            <div className={styles.projects}>
                <Link href='https://news.jamesmowat.com/'>
                <div className={styles.project}>
                    <h1>News</h1>
                    <p>A site to be a kinda modernish news/blog site made with next js, with a built in editor and publisher</p>
                </div>
                </Link>
                <Link href='https://gallery.jamesmowat.com'>
                <div className={`${styles.project} ${styles.rotateopp}`}>
                    <h1>Gallery</h1>
                    <p>Photo filled site full of my very own photos, with a built in filter and live updates connected to a pocket base db</p>
                </div>
                </Link>
                <Link href='/projects/uikchjasx2lm1vw'>
                <div className={styles.project}>
                    <h1>Suddsy.dev V1</h1>
                    <p>My first attempt at making a website with a db querry and kinda personal profile look (it don't tho)</p>
                </div>
                </Link>
            </div>
        </div>
    )
}