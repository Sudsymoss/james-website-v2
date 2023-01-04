"use client";
import styles from './Footer.module.css'
import Link from 'next/link'
import Script from 'next/script'
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETURL)

export default function Footer() {
    function logout(){
        pb.authStore.clear()
        window.location.replace("/auth/login")
    }
    if (pb.authStore.isValid === true) {
        
        return (
            <div>
                <div className={styles.footer}>
                    <p className={styles.username}>{pb.authStore.model.username}</p>
                    <p>© James M 2022</p>
                    <a id={styles.style2} data-replace="Logout" onClick={logout} className={styles.logoutbut}><span data-replace="Logout" onClick={logout} className={styles.logoutbut}>Logout</span></a>
                </div>
            </div>
        )
    }
    //if (session && session.user.role == "admin") {
    //    return (
    //        <div>
    //            <div className={styles.footer}>
    //                <Link href="/admin" passHref><a id={styles.style2} data-replace="Admin" className={styles.logoutbut}><span>Admin</span></a></Link>
    //                <p>© James M 2022</p>
    //                <Link href="/auth/logout" passHref><a id={styles.style2} data-replace="Logout" className={styles.logoutbut}><span>Logout</span></a></Link>
    //            </div>
    //        </div>
    //    )
    //}
    return (
        <div>
            <div className={styles.footer}>
                <div></div>
                <p>© James M 2022</p>
                <div></div>
            </div>
        </div>
    )
}

