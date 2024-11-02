'use client';
import Link from 'next/link';
import styles from './globalSearchPage.module.scss';

const GlobalSearchPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Global Search API Documentation</h1>

            <div className={styles.page__info}>
                <p className={styles.page__text}>
                    <strong>Search Users and Groups:</strong> Use the
                    endpoint <code>/api/v1/search</code> to perform a global search for users and groups based on a keyword.
                </p>
                <p className={styles.page__text}><strong>Query Parameter:</strong></p>
                <ul className={styles.page__list}>
                    <li><code>keyword</code>: The keyword to search for in the user’s first name, last name, and email, as well as in the group’s name and description.</li>
                </ul>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "users": [
        {
            "id": number,
            "firstName": "User First Name",
            "lastName": "User Last Name",
            "email": "user@example.com"
            .....
        }
    ],
    "groups": [
        {
            "id": number,
            "name": "Group Name",
            .....
        }
    ]
}`}
                    </pre>
                </div>
            </div>

            <Link href="/" className={styles.page__link}>Go back to Home</Link>
        </div>
    );
};

export default GlobalSearchPage;
