"use client";
import styles from './Notice.module.css'
import { useEffect } from 'react';
export default function notice() {
    useEffect(() => {
        //  Code that uses the window object goes here
        const notice = document.getElementById('notice');

        window.addEventListener('scroll', function () {
            if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
                notice.style.bottom = 'auto';
                notice.style.top = '63px';
            } else {
                notice.style.top = 'auto';
                notice.style.bottom = '0';
            }
        });

    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.notice} id="notice">
                <div className={styles.msg}>
                    <h3>Website under active devlopment! THIS IS A BETA website!</h3>
                </div>
            </div>
        </div>
    )
}