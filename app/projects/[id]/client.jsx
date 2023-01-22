'use client';
import PocketBase from 'pocketbase';
import styles from '../Projects.module.css'
import Load from '../../loading'

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETURL)
import * as React from "react";
import toast from "../../toast";
// Pages are Server Components by default
export default function Page({ children }) {
    if (pb.authStore.isValid !== true) {
        const notify = React.useCallback((type, message) => {
            toast({ type, message });
        }, []);
        notify("error", 'You must be logged in to view this page!')
        return (
            <div className={styles.blockpage}>
                <h1>Access denied!</h1>
                <h3>Login to view this page</h3>
            </div>
        )
    }
    return (
        <div>
            {children}
        </div>
    );
}