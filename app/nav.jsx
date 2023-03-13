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
                    <li><Link href="/projects"><button className={styles.pbutton}>
    Projects
</button></Link></li>
                </ul>
            </div>
        </div>
    )
}
