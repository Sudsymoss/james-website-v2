import styles from './TP.module.css'
import Link from 'next/link'
export default function topProjects() {
    return (
        <div className={styles.container}>
            <div className={styles.projects_data_container}>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d0cfcfff" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,224C672,224,768,256,864,224C960,192,1056,96,1152,90.7C1248,85,1344,171,1392,213.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

        </div>
    )
}