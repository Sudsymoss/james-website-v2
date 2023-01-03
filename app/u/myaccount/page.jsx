"use client";
import styles from './Acc.module.css'
import { useState, useEffect } from "react";
import PocketBase from 'pocketbase';
import * as React from "react";
import toast from "../../toast";

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETURL)


export default function Account() {
  const [formData, setFormData] = useState({})
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
      }
    });
  }, []);


  async function upload(e) {
    e.preventDefault()
    try {
      const record = await pb.collection('users').update(pb.authStore.model.id, formData2);
      notify("success", "Avatar updated!")
      console.log(record)
    } catch (error) {
      console.log(error)
      notify("error", "Failed to update avatar!")
      notify("info", "Maybe try removing your current one first?")
    }
    window.location.reload()
  }

  async function rmAvatar(e) {
    e.preventDefault()
    try {
      const record = await pb.collection('users').update(pb.authStore.model.id, { "avatar": null });
      notify("success", "Avatar removed!")
    } catch (error) {
      console.log(error)
    }
  }

  async function delUser(e) {
    e.preventDefault()
    const response = await pb.collection('users').delete(pb.authStore.model.id)
    const clear = pb.authStore.clear();
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
          <form onSubmit={upload} className={styles.aform}>
            <h2>Upload avatar</h2>
            <img className={styles.usericon} src={pb.baseUrl + "/api/files/_pb_users_auth_/" + pb.authStore.model.id + "/" + pb.authStore.model.avatar || `https://github.com/identicons/${pb.authStore.model.username}.png`} />
            <button className={styles.button} onClick={rmAvatar} type="button" >
              <div class={styles.buttontop} id={styles.delavatar}>
                <label class={styles.customfileupload}>
                  <p id={styles.fileInputName}>Remove current</p>
                </label>
              </div>
            </button>
            <div className={styles.button}>
              <div class={styles.buttontop}>
                <label class={styles.customfileupload}>
                  <input type="file" name="file" id="fileInput" accept="image/*" className={styles.finput} />
                  <p id={styles.fileInputName}>Select File</p>
                </label>
              </div>
            </div>
            <button className={styles.button} type="submit">
              <div class={styles.buttontop}>
                <label class={styles.customfileupload}>
                  <p id={styles.fileInputName}>Upload</p>
                </label>
              </div>
            </button>
          </form>
          <form className={styles.pform} onSubmit={delUser}>
            <h2>DELETE ACCOUNT</h2>
            <p>By deleting your account, you acknowledge that all of your data linked to this account will be deleted and can NOT be restored. This will have an immediate effect!</p>
            <input type="checkbox" id="conf" name="email" value={pb.authStore.model.email} required className={styles.conf} />
            <button className={styles.button} onClick={rmAvatar} type="submit" >
              <div class={styles.buttontop} id={styles.delavatar}>
                <label class={styles.customfileupload}>
                  <p id={styles.fileInputName}>Delete Account</p>
                </label>
              </div>
            </button>
          </form>
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