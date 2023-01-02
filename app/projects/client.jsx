'use client';
import styles from './Projectspage.module.css'
import { useEffect } from 'react';

export default function ClientComponent({ children }) {
    //if(){
    //    useEffect(() => {
    //        // Code that uses the window object goes here
    //      }, []);
    //    return <p><br/><br/><br/><br/>Hi</p>
    //}
    return (
        <>
            <div className={styles.main}>
                <div className={styles.title}>
                    <h1>Projects</h1>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    );
}