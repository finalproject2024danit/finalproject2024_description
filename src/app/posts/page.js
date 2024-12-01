'use client';
import Link from 'next/link';
import styles from './postsPage.module.scss';

const PostsPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Posts API Documentation</h1>

            <div className={styles.page__info}>
                <p className={styles.page__text}><strong>Get Post by ID:</strong> Use the
                    endpoint <code>/api/v1/posts/post/{'<id>'}</code> to retrieve a specific post by its ID.</p>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "id": number,
    "title": "Post Title",
    "content": "Post content",
    "createdDate": "2024-01-01T00:00:00Z",
    "lastModifiedDate": "2024-01-01T00:00:00Z"
}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Get Posts by User ID:</strong> Use the
                    endpoint <code>/api/v1/posts/user/{'<userId>'}</code> to retrieve all posts by a specific user.</p>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`[
    {
        "id": number,
        "title": "Post Title",
        "content": "Post content",
        "createdDate": "2024-01-01T00:00:00Z",
        "lastModifiedDate": "2024-01-01T00:00:00Z"
    },
    ...
]`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Create Post:</strong> Use the
                    endpoint <code>/api/v1/posts/create</code> to create a new post.</p>
                <p className={styles.page__text}><strong>Request Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "title": "Post Title",
    "content": "Post content"
}`}
                    </pre>
                </div>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "id": number,
    "title": "Post Title",
    "content": "Post content",
    "createdDate": "2024-01-01T00:00:00Z",
    "lastModifiedDate": "2024-01-01T00:00:00Z"
}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Patch Post content:</strong> Use the
                    endpoint <code>/api/v1/posts/post/{'<id>'}</code> to update the content of an existing post.</p>
                <p className={styles.page__text}><strong>Request Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "content": "Updated content"
}`}
                    </pre>
                </div>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "id": number,
    "title": "Post Title",
    "content": "Updated content",
    "createdDate": "2024-01-01T00:00:00Z",
    "lastModifiedDate": "2024-01-01T00:00:00Z"
}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Delete Post:</strong> Use the
                    endpoint <code>/api/v1/posts/delete/{'<id>'}</code> to delete a specific post by its ID.</p>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "message": "Post was deleted with id: <id>"
}`}
                    </pre>
                </div>
            </div>

            <Link href="/" className={styles.page__link}>Go back to Home</Link>
        </div>
    );
};

export default PostsPage;
