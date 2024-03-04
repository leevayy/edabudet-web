import styles from "./page.module.css";
import Search from "./components/search/search";
import Logo from "./components/logo/logo";


export default function Home() {
	return (<div className={styles.search_container}>
    <div className="search-wrapper">
      <Logo size="big" />
      <Search size="big"/>
    </div>
  </div>);
}
