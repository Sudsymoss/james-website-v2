"use client";

import styles from './Nav.module.css'
import Link from 'next/link'
import PocketBase from 'pocketbase';
import { useState, useEffect, useRef } from 'react';

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETURL)

export default function Nav() {
    
    if(pb.authStore.isValid == false){
        return (
            <div className={styles.container}>
                <div className={styles.navdiv}>
                    <h3><Link legacyBehavior passHref href="/"><a>James M</a></Link></h3>
                    <ul className={styles.navitems}>
                        <li><Link legacyBehavior href="/" passHref><a>Home</a></Link></li>
                        <li><Link legacyBehavior href="/about" passHref><a>About</a></Link></li>
                        <li><Link legacyBehavior href="/projects" passHref><a>Projects</a></Link></li>
                        <li id="conflash"><Link legacyBehavior href="/auth/login" passHref ><a>Login</a></Link></li>
                    </ul>
                </div>
            </div>
        )
    }

    let [isScrolling, setIsScrolling] = useState(false);
    let navbarRef = useRef(null);

    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div ref={navbarRef} className={`${styles.navdiv} ${isScrolling ? styles.scrolling : ""}`}>
                <h3><Link passHref href="/" legacyBehavior><a>James M</a></Link></h3>
                <ul className={styles.navitems}>
                <li><Link href="/" passHref legacyBehavior><a><svg className={styles.navsvg} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm0 3q-1.25 0-2.125-.875T8 39V19.5q0-.7.325-1.35.325-.65.875-1.05l13-9.75q.4-.3.85-.45.45-.15.95-.15.5 0 .95.15.45.15.85.45l13 9.75q.55.4.875 1.05.325.65.325 1.35V39q0 1.25-.875 2.125T37 42H26.5V29.5h-5V42Zm13-17.65Z"/></svg></a></Link></li>
                    <li><Link href="/about" passHref legacyBehavior><a><svg className={styles.navsvg} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24.15 34q.65 0 1.075-.425.425-.425.425-1.075v-9.05q0-.6-.45-1.025Q24.75 22 24.15 22q-.65 0-1.075.425-.425.425-.425 1.075v9.05q0 .6.45 1.025.45.425 1.05.425ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.25 0-7.9-1.525-3.65-1.525-6.35-4.225-2.7-2.7-4.225-6.35Q4 28.25 4 24q0-4.2 1.525-7.85Q7.05 12.5 9.75 9.8q2.7-2.7 6.35-4.25Q19.75 4 24 4q4.2 0 7.85 1.55Q35.5 7.1 38.2 9.8q2.7 2.7 4.25 6.35Q44 19.8 44 24q0 4.25-1.55 7.9-1.55 3.65-4.25 6.35-2.7 2.7-6.35 4.225Q28.2 44 24 44Zm0-20Zm0 17q7 0 12-5t5-12q0-7-5-12T24 7q-7 0-12 5T7 24q0 7 5 12t12 5Z"/></svg></a></Link></li>
                    <li><Link href="/projects" passHref legacyBehavior><a><svg className={styles.navsvg} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M33.95 24.7 23.3 14.05 33.95 3.4 44.6 14.05ZM6 21.1V6.05h15.05V21.1ZM26.9 42V26.95h15.05V42ZM6 42V26.95h15.05V42Zm3-23.9h9.05V9.05H9Zm25.1 2.55 6.45-6.45-6.45-6.45-6.45 6.45ZM29.9 39h9.05v-9.05H29.9ZM9 39h9.05v-9.05H9Zm9.05-20.9Zm9.6-3.9Zm-9.6 15.75Zm11.85 0Z"/></svg></a></Link></li>
                    <li><Link href="/u/myaccount" passHref><img className={styles.usericon} src={pb.baseUrl + "/api/files/_pb_users_auth_/" + pb.authStore.model.id + "/" + pb.authStore.model.avatar ||`https://github.com/identicons/${pb.authStore.model.username}.png`}></img></Link></li>
                </ul>
            </div>
        </div>
    );
}