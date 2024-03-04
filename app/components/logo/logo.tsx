import Image from "next/image";
import styles from "./logo.module.css";

export default function Logo({size}: {size: 'small' | 'big'}) {

    return <a href="/" className={styles.logo}>
        {
            size === 'big' ? (
                <Image src={"/edabudet-logo.svg"} alt="Eda Búdet" width={600} height={120} />
            ) 
            : (
                <Image src={"/edabudet-logo-small.svg"} alt="Eda Búdet" width={205} height={50} />
            )
        }
    </a>
}