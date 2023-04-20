"use client";

import styles from './Nav.module.css'
import Link from 'next/link'
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETURL)

export default function Nav() {

    return (
        <div className={styles.container}>
            <div className={styles.navdiv}>
                <h3><Link legacyBehavior passHref href="/"><a>James M</a></Link></h3>
                <ul className={styles.navitems}>
                <li className={styles.normalnavitem}><Link href="https://gallery.jamesmowat.com/" target='_blank' aria-label='photo gallery'>Gallery</Link></li>
                <li className={styles.normalnavitem}><Link href="https://news.jamesmowat.com/" target='_blank' aria-label='news site'>News</Link></li>
                <li className={styles.normalnavitem}><Link href="/projects" aria-label='my projects'>Projects</Link></li>
                </ul>
            </div>
        </div>
    )
}
