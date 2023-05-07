"use client";
import styles from './Nav.module.css'
import Link from 'next/link'

export default function Nav() {

    return (
        <div className={styles.container}>
            <div className={styles.navdiv}>
                <ul className={styles.navitems}>
                <li className={styles.normalnavitem}><Link href="/" aria-label='Home'>Home</Link></li>
                <li className={styles.normalnavitem}><Link href="/projects" aria-label='my projects'>Projects</Link></li>
                <li className={styles.normalnavitem}><Link href="https://news.jamesmowat.com/" target='_blank' aria-label='news site'>News</Link></li>
                <li className={styles.normalnavitem}><Link href="https://gallery.jamesmowat.com/" target='_blank' aria-label='photo gallery'>Gallery</Link></li>

                </ul>
            </div>
        </div>
    )
}
