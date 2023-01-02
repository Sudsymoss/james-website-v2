"use client";
import Script from 'next/script';
import PocketBase from 'pocketbase'
import { useEffect } from 'react';
import * as React from "react";
import toast from "../../toast";

function Provide() {
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
      }, []);
    useEffect(() => {
        // Code that uses the window object goes here
        const pb = new PocketBase("http://127.0.0.1:8090");
        const redirectUrl = 'http://poe.local:3000/auth/redirect';

        // parse the query parameters from the redirected url
        const params = new URL(window.location).searchParams;
        // load the previously stored provider's data
        //const provider = JSON.parse(localStorage.getItem('provider'))
        const provider = pb.collection('temp').getFullList();
        // compare the redirect's state param and the stored provider's one
        //if (provider.state !== params.get('state')) {
        //    throw "State parameters don't match.";
        //}
        
    console.log(provider, provider.state, provider.name)
        // authenticate
        pb.collection('users').authWithOAuth2(
            provider.name,
            params.get('code'),
            provider.codeVerifier,
            redirectUrl,
            { '$autoCancel': false },
            // pass optional user create data
            {
                emailVisibility: false,
                avatar: provider.avatarUrl,
            }
        ).then((authData) => {
            document.getElementById('content').innerText = JSON.stringify(authData, null, 2);
            console.log(pb.authStore.isValid);
            console.log(pb.authStore.token);
            console.log(pb.authStore.model.id);
        }).catch((err) => {
            document.getElementById('content').innerText = "Failed to exchange code.\n" + err;
            notify("error", err.toString())
        });
    }, []);


    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 id='content'></h3>
            <h1>Authinggg</h1>
        </div>
    );
}

export default Provide;
