import Link from "next/link";
import Head from "next/head";
import styles from './Projects.module.css'

export default async function About() {
    return (

        <div className={styles.main}>
            <div className={styles.title}>
                <h1>About</h1>
            </div>
            <div className={styles.about}>
                <div>
                    <h3 className={styles.what}>What is this?</h3>
                    <p>This is a personal site made with next js to showcase my skills
                        Also this is the 2nd revision of this site (hopefuly a better version!).</p>
                </div>
                <div>
                    <h3 className={styles.what}>Why an account?</h3>
                    <p>With an account you get access to view my projects on this website</p>
                </div>
                <div>
                    <h3 className={styles.what}>Who am i?</h3>
                    <p>Me</p>
                </div>
            </div>
        </div>
    );
}
