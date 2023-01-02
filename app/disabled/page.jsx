"use client";
import styles from './Projects.module.css'
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        if (!/Mobile/.test(navigator.userAgent)) {
          window.location.replace("/");
        }
      }, []);
      
    return (

        <div className={styles.main}>
            <div className={styles.title}>
            <span className={styles.materialsymbolsoutlined}>
            crisis_alert
</span>
                <h1>Login is currently disabled on mobile!</h1>
                <p>The login currently doesn't work with mobile browsers and I am working on a fix</p>
            </div>
        </div>
    );
}
