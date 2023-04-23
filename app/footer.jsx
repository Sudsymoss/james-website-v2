"use client";
import styles from './Footer.module.css'
import Link from 'next/link';

export default function Footer() {
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.credits}>
                    <h3>Credits</h3>
                    <ul>
                        <li>Database: <Link href='https://pocketbase.io'>Pocketbase</Link></li>
                        <li>Github page: <Link href='https://github.com/jfmow'>jfmow</Link></li>
                    </ul>
                </div>
                <div className={styles.credits}>
                    <h3>Creator</h3>
                    <ul>
                        <li>Made by James M</li>
                    </ul>
                </div>
                <div className={styles.credits}>
                    <h3>Other sites</h3>
                    <ul>
                        <li><Link href='https://news.jamesmowat.com'>News</Link></li>
                        <li><Link href='https://gallery.jamesmowat.com'>Gallery</Link></li>
                    </ul>
                </div>
                <div className={styles.credits}>
                    <h5>My other domains</h5>
                    <ul>
                        <li>suddsy.dev</li>
                        <li>sudsy.dev</li>
                        <li>jamesmowat.com</li>
                        <li>pi5.dev</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

