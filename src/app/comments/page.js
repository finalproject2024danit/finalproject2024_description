'use client';
import Link from 'next/link';
import styles from './commentsPage.module.scss';

const CommentsPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Comment API Documentation</h1>

            <div className={styles.page__info}>
                <p className={styles.page__text}><strong>Get Comment by ID:</strong> Use the
                    endpoint <code>/api/v1/comment/{'<id>'}</code> to retrieve a specific comment.</p>
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
    "content": "Comment Content",
    "createdDate": "2024-01-01T00:00:00Z",
    "lastModifiedDate": "2024-01-01T00:00:00Z"
}`}
                    </pre>
                </div>
            </div>

            <div className={styles.page__info}>
                <p className={styles.page__text}><strong>Create Comment:</strong> Use the
                    endpoint <code>/api/v1/comment/create</code> to create a new comment.</p>
                <p className={styles.page__text}><strong>Request Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "postId": number,
    "userId": number,
    "content": "Comment Content"
}`}
                    </pre>
                </div>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "id": number,
    "postId": number,
    "userId": number,
    "content": "Comment Content",
    "createdDate": "2024-01-01T00:00:00Z",
    "lastModifiedDate": "2024-01-01T00:00:00Z"
}`}
                    </pre>
                </div>
                <p className={styles.page__text}><strong>Method:</strong> <code>POST</code></p>
                <p className={styles.page__text}><strong>Description:</strong> Creates a new comment for a specific post. The request body must include the <code>postId</code>, <code>userId</code>, and the <code>content</code> of the comment. The response will contain the full details of the created comment.</p>
            </div>

            <div className={styles.page__info}>
                <p className={styles.page__text}><strong>Delete Comment by ID:</strong> Use the
                    endpoint <code>/api/v1/comment/delete/{'<id>'}</code> to delete a comment by its ID.</p>
                <p className={styles.page__text}><strong>Method:</strong> <code>GET</code></p>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "message": "Comment was successfully deleted"
}`}
                    </pre>
                </div>
                <p className={styles.page__text}><strong>Description:</strong> Deletes the comment with the specified ID. If successful, the response will contain a confirmation message.</p>
            </div>

            <Link href="/" className={styles.page__link}>Go back to Home</Link>
        </div>
    );
};

export default CommentsPage;
