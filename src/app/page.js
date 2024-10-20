import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <p>This is the home page. Navigate to the other pages:</p>
                <nav>
                    <Link href="/users">Users</Link>
                    <Link href="/messages">Messages</Link>
                    <Link href="/workplace">Workplace</Link>
                </nav>
            </main>

        </div>
    );
}
