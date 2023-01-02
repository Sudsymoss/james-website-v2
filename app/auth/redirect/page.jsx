"use client";
import Script from 'next/script';
import PocketBase from 'pocketbase'
import { useEffect } from 'react';
import * as React from "react";
import toast from "../../toast";
import Loading from '../../loading';
import styles from '../Auth.module.css'

function Provide() {
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
      }, []);
    useEffect(() => {
        // Code that uses the window object goes here
        const pb = new PocketBase(process.env.POCKET_URL);
        const redirectUrl = process.env.POCKET_URL_REDIRECT;

        // parse the query parameters from the redirected url
        const params = new URL(window.location).searchParams;
        // load the previously stored provider's data
        const provider = JSON.parse(localStorage.getItem('provider'))
        //const provider = pb.collection('temp').getFullList();
        // compare the redirect's state param and the stored provider's one
        if (provider.state !== params.get('state')) {
            throw "State parameters don't match.";
        }
        // authenticate
        pb.collection('users').authWithOAuth2(
            provider.name,
            params.get('code'),
            provider.codeVerifier,
            redirectUrl,
            // pass optional user create data
            {
                emailVisibility: false,
                avatar: provider.avatarUrl,
            }
        ).then((authData) => {
            notify("success", "Logged in Successfuly!")
            window.location.replace("/")
            //console.log(pb.authStore.isValid);
            //console.log(pb.authStore.token);
            //console.log(pb.authStore.model.id);
        }).catch((err) => {
            notify("error", err.toString())
            setTimeout(function() {
                window.location.replace("/auth/login")
              }, 2000);
        });
    }, []);


    return (
        <div className={styles.provi}>
            <Loading/>
        </div>
    );
}

export default Provide;
