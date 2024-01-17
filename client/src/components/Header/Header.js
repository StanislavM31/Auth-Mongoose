import Link from "next/link";
import style from "./style.module.scss";

export default function Header(){
    return(
        <div className={style.header}>
            <p><Link href="/auth">Go to auth page</Link></p>
            <p><Link href="/reg">Go to registration page</Link></p>
            <p><Link href="/">Go to main page</Link></p>
        </div>
    )
}