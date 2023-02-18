'use client';
import styles from './Create.module.css'
import PocketBase from 'pocketbase';
import * as React from "react";
import toast from "../../toast";
const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETURL);


import { useState } from 'react';

export default function CreateProjects() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [dislink, setDislink] = useState('');
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
      }, []);

    async function Create(e) {
        e.preventDefault();

        try {
            const data = {
                "name": name,
                "title": title,
                "desc": desc,
                "dislink": dislink,
                'author': pb.authStore.model.id
            };
    
            const record = await pb.collection('projects').create(data);
    
            // Reset form after creating project
            setName('');
            setTitle('');
            setDesc('');
            setDislink('');
            notify('success', 'Project Created!')
        } catch (error) {
            console.error(error)
            notify('warning', 'Falied to create new project!')
        }
    }

    return (
        <div className={styles.main}>
            
            <div className={styles.ptitle}>
            <h1>Project creator</h1>
            </div>
            <div className={styles.formboxd}>
            <div className={styles.formbox}>
                <form className={styles.form} onSubmit={Create}>
                    <span className={styles.title}>Create</span>
                    <span className={styles.subtitle}>Create a new project.</span>
                    <div className={styles.formcontainer}>
                        <input type="text" className={styles.input} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" className={styles.input} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" className={styles.input} placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
                        <input type="text" className={styles.input} placeholder="Dislink" value={dislink} onChange={(e) => setDislink(e.target.value)} />
                    </div>
                    <button type="submit">Create</button>
                </form>
                <div className={styles.formsection}>
                    <p>Can't create a project? <a href="/auth/login">Log in</a> </p>
                </div>
            </div>
            </div>
        </div>
    )
}
