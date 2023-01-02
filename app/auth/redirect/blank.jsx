"use client";
import Script from 'next/script';
import PocketBase from 'pocketbase'
import { useEffect } from 'react';

const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false)

async function stuff(){
    const provider = await pb.collection('temp').getFullList();
    console.log(provider, provider.state, provider.name)
    return provider
}

async function Provide() {
    const provider = await stuff()
    useEffect(() => {
        // Code that uses the window object goes here
        const pb = new PocketBase("http://127.0.0.1:8090");
        pb.autoCancellation(false)
        const redirectUrl = 'http://localhost:3000/auth/redirect';

        // parse the query parameters from the redirected url
        const params = new URL(window.location).searchParams;
        // load the previously stored provider's data
        
        // compare the redirect's state param and the stored provider's one
        if (provider.state !== params.get('state')) {
            throw "State parameters don't match.";
        } else{
            console.log("HFYCVGUBHIUOJHIYGUTVFGBHNJO")
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
            document.getElementById('content').innerText = JSON.stringify(authData, null, 2);
            console.log(pb.authStore.isValid);
            console.log(pb.authStore.token);
            console.log(pb.authStore.model.id);
        }).catch((err) => {
            document.getElementById('content').innerText = "Failed to exchange code.\n" + err;
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
