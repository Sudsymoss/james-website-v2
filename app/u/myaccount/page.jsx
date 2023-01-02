"use client";
import styles from './Acc.module.css'
import { useState, useEffect } from "react";
import PocketBase from 'pocketbase';
import * as React from "react";
import toast from "../../toast";

const pb = new PocketBase(process.env.POCKET_URL)


export default function Account() {
  const [formData, setFormData] = useState({})
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  async function delUser(e) {
    e.preventDefault()
    const response = await pb.collection('users').delete(pb.authStore.model.id)
    const clear = pb.authStore.clear();
    console.log(response)
    if(response !== true){
      notify("error", "Account failed to delete!")
      notify("warning", `Status: ${response.status.toString()}`)
    } else{
      notify("success", "Account deleted!")
      location.replace("/")
    }
    return response.json()
  }
  if(pb.authStore.isValid === true){

  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>My Account</h1>
        <p>Joined: {pb.authStore.model.created}</p>
        <p>Email: {pb.authStore.model.email}</p>
      </main>
      <section className={styles.forms}>
        <form className={styles.pform} onSubmit={delUser}>
          <h2>DELETE ACCOUNT</h2>
          <p>By deleting your account, you acknowledge that all of your data linked to this account will be deleted and can NOT be restored. This will have an immediate effect!</p>
          <input type="checkbox" id="conf" name="email" value={pb.authStore.model.email} required className={styles.conf} />
          <button type="submit" className={styles.psubmitdel}>delete</button>
        </form>
      </section>
    </div>
  )
  } else if (pb.authStore.isValid === false){
    return useEffect(() => {
      window.location.replace("/")
    }, []);
  }else{
    return <p>Loading...</p>
  }
}