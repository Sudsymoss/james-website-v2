"use client";
import { useState, useEffect } from 'react';
import * as React from "react";
import toast from "../../toast";
import PocketBase from 'pocketbase';
import Providers from './providers'
import styles from '../Auth.module.css'
import Link from 'next/link'
import Loading from '../../loading';


const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETURL);
pb.autoCancellation(false)
export default function Login() {
    //useEffect(() => {
    //    if (/Mobile/.test(navigator.userAgent)) {
    //      window.location.replace("/disabled")
    //    }
    //  }, []);
    const [email, setEmail] = useState('');
    //const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
        console.log(type, message)
    }, []);
    async function pwdReset() {
        try {
            let text;
            let person = prompt("Please enter your email:", "");
            if (person == null || person == "") {
                text = "User cancelled the prompt.";
            } else {
                text = person
            }
            await pb.collection('users').requestPasswordReset(person);
            notify('success', 'Password reset email sent!')
        } catch (error) {
            console.log(error)
            notify('warning', 'Failed to send reset email!')
        }
    }
    async function auth(event) {
        event.preventDefault();
        console.error(pb.autoCancellation)
        //console.log(name, email)
        try {
            const authData = await pb.collection('users').authWithPassword(
                email,
                password,
                { '$autoCancel': false },
            );
            //console.error(authData)
            try {
                const record = await pb.collection('users').getOne(pb.authStore.model.id, {
                    expand: 'email,disabled,admin',
                });
                if (record.disabled == true) {
                    notify('error', `Error this account is currently disabled!`)
                    pb.authStore.clear()
                } else {
                    notify("success", "Logged in Successfuly!")
                    window.location.replace("/projects")
                }
            } catch (error) {
                console.log(error)
            }

        } catch (error) {
            console.log(error.isAbort)
            notify("error", 'Failed to login')
        }
    }
    const status = pb.authStore.isValid
    if (status === true) {
        notify("info", "Redirecting....")
        useEffect(() => {
            window.location.replace("/auth/logout")
        }, []);
        return (
            <Loading />
        )
    } else if (status === false) {
        return (
            <div>
                <div className={styles.login}>
                    <div className={styles.card}>
                        <h4 className={styles.title}>Log In!</h4>
                        <form onSubmit={auth}>
                            <div className={styles.field}>
                                <svg className={styles.inputicon} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path></svg>
                                <input autoComplete="off" id="logemail" value={email} placeholder="Email or Username" className={styles.inputfield} name="email" type="text" onChange={event => setEmail(event.target.value)} />
                            </div>
                            <div className={styles.field}>
                                <svg className={styles.inputicon} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path></svg>
                                <input autoComplete="off" value={password} id="logpass" placeholder="Password" className={styles.inputfield} name="password" type="password" onChange={event => setPassword(event.target.value)} required />
                            </div>
                            <div className={styles.buttons}>
                                <button className={styles.btn} type="submit">Login</button>
                                <Providers />
                            </div>
                            <p className={styles.signup}>Forgot password? <a className={styles.signuplink} onClick={pwdReset}>Reset</a></p>
                            <p className={styles.signup}>New here? <Link className={styles.signuplink} href='/auth/signup'>Signup</Link></p>
                        </form>

                    </div>
                </div>
            </div>
        )
    } else {
        return notify("info", "Loading....")
    }

}