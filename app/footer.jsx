"use client";
import styles from './Footer.module.css'
import Link from 'next/link';

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.credits}>
                    <h3>Credits</h3>
                    <ul>
                        <li>Database: <Link href='https://pocketbase.io'>Pocketbase</Link></li>
                        <li>Github page: <Link href='https://github.com/jfmow'>jfmow</Link></li>
                        <li>Built with the nextjs 13 app dir</li>
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
            <div className={styles.customshapedividerbottom1682285930}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill}></path>
                </svg>
            </div>
        </div>
    )
}

