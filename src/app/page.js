import styles from "./home.module.scss";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.page__main}>
                <p className={styles.page__text}>
                    Welcome to the home page! Navigate to entities:
                </p>
                <nav className={styles.page__nav}>
                    <Link href="/users" className={styles.page__link}>
                        Users
                    </Link>
                    <Link href="/messages" className={styles.page__link}>
                        Messages
                    </Link>
                    <Link href="/workplaces" className={styles.page__link}>
                        Workplace
                    </Link>
                    <Link href="/friends" className={styles.page__link}>
                        Friends
                    </Link>
                    <Link href="/comments" className={styles.page__link}>
                        Comments
                    </Link>
                    <Link href="/likes" className={styles.page__link}>
                        Likes
                    </Link>
                    <Link href="/posts" className={styles.page__link}>
                        Posts
                    </Link>
                    
                </nav>
            </main>
        </div>
    );
}
