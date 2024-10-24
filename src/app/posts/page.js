'use client';
import Link from 'next/link';
import styles from './postsPage.module.scss';

const PostsPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Post API Documentation</h1>

            <div className={styles.page__info}>
                <p className={styles.page__text}><strong>Get Post by ID:</strong> Use the
                    endpoint <code>/api/v1/post/{'<id>'}</code> to retrieve a specific post.</p>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "id": number,
    "userId": number,
    "content": "Post Content",
    "comments": [
        {
            "id": number,
            "userId": number,
            "content": "Comment Content",
            "createdDate": "2024-01-01T00:00:00Z",
            "lastModifiedDate": "2024-01-01T00:00:00Z"
        }
    ],
    "likes": [
        {
            "id": number,
            "userId": number,
            "createdDate": "2024-01-01T00:00:00Z",
            "lastModifiedDate": "2024-01-01T00:00:00Z"
        }
    ],
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

export default PostsPage;
