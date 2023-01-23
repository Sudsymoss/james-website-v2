"use client";

import styles from './Nav.module.css'
import Link from 'next/link'
import PocketBase from 'pocketbase';

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
    return (
        <div className={styles.container}>
            <div className={styles.navdiv}>
                <h3><Link passHref href="/" legacyBehavior><a>James M</a></Link></h3>
                <ul className={styles.navitems}>
                    <li><Link href="/" passHref legacyBehavior><a>Home</a></Link></li>
                    <li><Link href="/about" passHref legacyBehavior><a>About</a></Link></li>
                    <li><Link href="/projects" passHref legacyBehavior><a>Projects</a></Link></li>
                    <li><Link href="/u/myaccount" passHref><img className={styles.usericon} src={pb.baseUrl + "/api/files/_pb_users_auth_/" + pb.authStore.model.id + "/" + pb.authStore.model.avatar ||`https://github.com/identicons/${pb.authStore.model.username}.png`}></img></Link></li>
                </ul>
            </div>
        </div>
    )
}