"use client";
import styles from './Acc.module.css'
import { useState, useEffect } from "react";
import PocketBase from 'pocketbase';
import * as React from "react";
import toast from "../../toast";
import Link from 'next/link';

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETURL)


export default function Account() {
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);
  const formData2 = new FormData();
  useEffect(() => {
    //  Code that uses the window object goes here
    const fileInput = document.getElementById('fileInput');

    // listen to file input changes and add the selected files to the form data
    fileInput.addEventListener('change', function () {
      for (let file of fileInput.files) {
        formData2.append('avatar', file);
        document.getElementById("buttontop").style.backgroundColor = "#89b39f";
        document.getElementById("uploadbutton").style.backgroundColor = "#1ee384";
        document.getElementById("fileInputName").textContent = 'File selected';
      }
    });
  }, []);


  async function upload(e) {
    e.preventDefault()
    document.getElementById("fileInputName").textContent = "Wait!";
    document.getElementById("uploadbuttontext").textContent = "Uploading...";
    try {
      notify("info", "Uploading avatar...")
      const record = await pb.collection('users').update(pb.authStore.model.id, formData2);
      notify("success", "Avatar updated!")
      setTimeout(() => {
        window.location.reload()
      }, 1200);
    } catch (error) {
      console.log(error)
      notify("error", "Failed to update avatar!")
      notify("info", "Maybe try removing your current one first?")
    }
  }

  async function rmAvatar(e) {
    e.preventDefault()
    try {
      const record = await pb.collection('users').update(pb.authStore.model.id, { "avatar": null });
      notify("success", "Avatar removed!")
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  async function delUser(e) {
    e.preventDefault()
    notify("info", "Account deleting!")
    const response = await pb.collection('users').delete(pb.authStore.model.id)
    pb.authStore.clear();
    console.log(response)
    if (response !== true) {
      notify("error", "Account failed to delete!")
      notify("warning", `Status: ${response.status.toString()}`)
    } else {
      notify("success", "Account deleted!")
      location.replace("/")
    }
    return response.json()
  }
  if (pb.authStore.isValid === true) {


    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>My Account</h1>
          <p>Joined: {pb.authStore.model.created}</p>
          <p>Email: {pb.authStore.model.email}</p>
        </main>
        <div className={styles.forms}>
          <form onSubmit={upload} className={styles.aform} id="form">
            <h2>Avatar</h2>
            <img className={styles.usericon} src={pb.baseUrl + "/api/files/_pb_users_auth_/" + pb.authStore.model.id + "/" + pb.authStore.model.avatar || `https://github.com/identicons/${pb.authStore.model.username}.png`} />
            
            <div className={styles.uploader}>
            <button className={styles.button} onClick={rmAvatar} type="button" >
              <div class={styles.buttontop} id={styles.delavatar}>
                <label class={styles.customfileupload}>
                  <p>Remove current</p>
                </label>
              </div>
            </button>
            <div></div>
            <div className={styles.button}>
              <div class={styles.buttontop} id="buttontop">
                <label class={styles.customfileupload}>
                  <input type="file" name="file" id="fileInput" accept="image/*" className={styles.finput} />
                  <p id="fileInputName">Select File</p>
                </label>
              </div>
            </div>
            <button className={styles.button} type="submit">
              <div class={styles.buttontop} id="uploadbutton">
                <label class={styles.customfileupload}>
                  <p id="uploadbuttontext">Upload</p>
                </label>
              </div>
            </button>
            </div>
          </form>
          <form className={styles.pform} onSubmit={delUser}>
            <h2>DELETE ACCOUNT</h2>
            <p>By deleting your account, you acknowledge that all of your data linked to this account will be deleted and can NOT be restored. This will have an immediate effect!</p>
            <input type="hidden" name="email" value={pb.authStore.model.email} />
            <button className={styles.button} type="submit">
              <div class={styles.buttontop} id={styles.delavatar}>
                <label class={styles.customfileupload}>
                  <p id={styles.fileInputName}>Delete Account</p>
                </label>
              </div>
            </button>
          </form>
        </div>
        <div className={styles.lcreate}>
          <Link href='/auth/logout'>
          <button className={styles.lbutton}>
            <span className={styles.lspan}>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40"><path d="M626.797 750.073q-12.869-13.348-12.869-31.446t12.869-30.729l67.826-67.825h-288.84q-18.5 0-31.287-12.82-12.786-12.82-12.786-31.37t12.786-31.253q12.787-12.703 31.287-12.703H693.29l-69.058-69.057q-12.348-12.022-12.065-29.94.282-17.918 13.44-30.968 12.5-13.049 31.063-12.861 18.563.188 31.432 13.058L831.74 545.797q6.618 6.715 9.744 14.648 3.126 7.932 3.126 16.352t-3.126 16.235q-3.126 7.815-9.744 14.504L688.204 751.073q-12.682 12.681-30.421 12.275-17.739-.406-30.986-13.275ZM185.913 951.827q-36.595 0-62.559-25.853T97.39 863.681V288.319q0-36.595 25.964-62.559t62.559-25.964h247.782q18.5 0 31.287 13.042 12.786 13.041 12.786 31.558t-12.786 31.22q-12.787 12.703-31.287 12.703H185.913v575.362h247.782q18.5 0 31.287 12.82 12.786 12.82 12.786 31.37t-12.786 31.253q-12.787 12.703-31.287 12.703H185.913Z"/></svg>
            </span>
          </button>
          </Link>
        </div>
      </div>
    )
  } else if (pb.authStore.isValid === false) {
    return useEffect(() => {
      window.location.replace("/")
    }, []);
  } else {
    return <p>Loading...</p>
  }
}