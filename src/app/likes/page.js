'use client';
import Link from 'next/link';
import styles from './likesPage.module.scss';

const LikesPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Like API Documentation</h1>

            <div className={styles.page__info}>
                <p className={styles.page__text}><strong>Get Like by ID:</strong> Use the
                    endpoint <code>/api/v1/like/{'<id>'}</code> to retrieve a specific like.</p>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "id": number,
    "post": {
        "id": number,
        "userId": number,
        "content": "Post Content",
        "createdDate": "2024-01-01T00:00:00Z",
        "lastModifiedDate": "2024-01-01T00:00:00Z"
    },
    "userId": number,
    "createdDate": "2024-01-01T00:00:00Z",
    "lastModifiedDate": "2024-01-01T00:00:00Z"
}`}
                    </pre>
                </div>
            </div>

            <Link href="/" className={styles.page__link}>Go back to Home</Link>
        </div>
    );
};

export default LikesPage;
