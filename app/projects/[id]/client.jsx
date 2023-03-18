'use client';
import styles from '../Projects.module.css'

import * as React from "react";
import toast from "../../toast";
// Pages are Server Components by default
export default function Page({ children }) {
    console.log()
    return (
        <div>
            {children}
        </div>
    );
}