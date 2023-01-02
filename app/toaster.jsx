"use client";

import * as React from "react";
import { useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import toast from "./toast";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
        <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      >
        </ToastContainer>
  )
}
