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

                <p className={styles.page__text}><strong>Like a Post:</strong> Use the
                    endpoint <code>/api/v1/likes/liked</code> to like a specific post.</p>
                <p className={styles.page__text}><strong>Request Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "postId": number,
    "userId": number
}`}
                    </pre>
                </div>
                <p className={styles.page__text}><strong>Response Structure:</strong> Returns the like object:</p>
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

                <p className={styles.page__text}><strong>Like a Comment:</strong> Use the
                    endpoint <code>/api/v1/comment/like</code> to like a specific comment.</p>
                <p className={styles.page__text}><strong>Request Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "commentId": number,
    "userId": number
}`}
                    </pre>
                </div>
                <p className={styles.page__text}><strong>Response Structure:</strong> Returns the like object:</p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "id": number,
    "comment": {
        "id": number,
        "postId": number,
        "userId": number,
        "content": "Comment Content",
        "createdDate": "2024-01-01T00:00:00Z",
        "lastModifiedDate": "2024-01-01T00:00:00Z"
    },
    "userId": number,
    "createdDate": "2024-01-01T00:00:00Z",
    "lastModifiedDate": "2024-01-01T00:00:00Z"
}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Get Likes by Post ID with Pagination and Sorting:</strong> Use
                    the endpoint <code>/api/v1/like/post/{'<postId>'}</code> to retrieve likes for a specific post with
                    optional pagination and sorting.</p>
                <p className={styles.page__text}><strong>Query Parameters:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "startPage": number, // Optional, default is 0 (first page)
    "perPage": number,   // Optional, default is 10 (items per page)
    "sortBy": string,    // Optional, default is "id" (field to sort by)
    "sortDirection": string // Optional, default is "asc" (ascending or descending order)
}`}
                    </pre>
                </div>
                <p className={styles.page__text}><strong>Response Structure:</strong> Returns a list of like objects:
                </p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`[
    {
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
    },
    ...
]`}
                    </pre>
                </div>
            </div>

            <Link href="/" className={styles.page__link}>Go back to Home</Link>
        </div>
    );
};

export default LikesPage;
