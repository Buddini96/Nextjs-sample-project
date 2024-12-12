import React from "react";
import styles from "./img.module.css";
import Image from "next/image";

function Page() {
  return (
    <div className={styles.pagebackground}>
      <h1 className={styles.heading}>Image component</h1>
      <Image
        src="https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Unsplash example"
        width={1000}
        height={1000}
      />
    </div>
  );
}

export default Page;
