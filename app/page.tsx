import Image from "next/image";
import styles from "./page.module.css";
import { useState, ChangeEvent, Suspense } from "react";
import Search from "./components/search";


export default function Home() {
	return (<div className={styles.search_container}>
    <div className="search-wrapper">
			<Image src={"edabudet-logo.svg"} alt="Eda Búdet" width={600} height={120} />
      <Search size="big"/>
    </div>
  </div>);
}
