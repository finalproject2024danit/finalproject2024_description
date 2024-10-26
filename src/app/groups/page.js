'use client';
import Link from 'next/link';
import styles from './groupsPage.module.scss';

const GroupsPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Group API Documentation</h1>

            <div className={styles.page__info}>
                <h2 className={styles.page__subtitle}>API Endpoints:</h2>

                <h3 className={styles.page__method}>Get Group by ID</h3>
                <p className={styles.page__text}><strong>Endpoint:</strong> <code>/api/v1/groups/{'<id>'}</code></p>
                <p className={styles.page__text}>Retrieves a specific group by its ID.</p>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "id": number,
    "name": "Group Name",
    "isOpen": boolean,
    "users": [/* Array of user objects */],
    "posts": [/* Array of post objects */],
    "createdDate": "2024-01-01T00:00:00Z",
    "lastModifiedDate": "2024-01-01T00:00:00Z"
}`}
                    </pre>
                </div>

                <h3 className={styles.page__method}>Get Group by Name</h3>
                <p className={styles.page__text}><strong>Endpoint:</strong> <code>/api/v1/groups/name/{'<name>'}</code></p>
                <p className={styles.page__text}>Retrieves a specific group by its name.</p>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "id": number,
    "name": "Group Name",
    "isOpen": boolean,
    "users": [/* Array of user objects */],
    "posts": [/* Array of post objects */],
    "createdDate": "2024-01-01T00:00:00Z",
    "lastModifiedDate": "2024-01-01T00:00:00Z"
}`}
                    </pre>
                </div>

                <h3 className={styles.page__method}>Search Groups by Name</h3>
                <p className={styles.page__text}><strong>Endpoint:</strong> <code>/api/v1/groups/search/{'<name>'}</code></p>
                <p className={styles.page__text}>Searches for groups that contain the specified name (minimum 3 characters).</p>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`[
    {
        "id": number,
        "name": "Group Name",
        "isOpen": boolean,
        "users": [/* Array of user objects */],
        "posts": [/* Array of post objects */],
        "createdDate": "2024-01-01T00:00:00Z",
        "lastModifiedDate": "2024-01-01T00:00:00Z"
    },
    ...
]`}
                    </pre>
                </div>

                <h3 className={styles.page__method}>Create Group</h3>
                <p className={styles.page__text}><strong>Endpoint:</strong> <code>/api/v1/groups</code></p>
                <p className={styles.page__text}>Creates a new group with the provided details.</p>
                <p className={styles.page__text}><strong>Request Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "name": "Group Name",
    "isOpen": true
}`}
                    </pre>
                </div>
                <p className={styles.page__text}><strong>Response Structure:</strong> Same as Get Group by ID.</p>

                <h3 className={styles.page__method}>Delete Group</h3>
                <p className={styles.page__text}><strong>Endpoint:</strong> <code>/api/v1/groups/{'<id>'}</code></p>
                <p className={styles.page__text}>Deletes a specific group by its ID.</p>
                <p className={styles.page__text}><strong>Response:</strong> Returns no content.</p>

                <h3 className={styles.page__method}>Add User to Group</h3>
                <p className={styles.page__text}><strong>Endpoint:</strong> <code>/api/v1/groups/add-user</code></p>
                <p className={styles.page__text}>Adds a user to a specified group.</p>
                <p className={styles.page__text}><strong>Request Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "groupId": number,
    "userId": number
}`}
                    </pre>
                </div>
                <p className={styles.page__text}><strong>Response:</strong> Returns no content.</p>

                <h3 className={styles.page__method}>Remove User from Group</h3>
                <p className={styles.page__text}><strong>Endpoint:</strong> <code>/api/v1/groups/remove-user</code></p>
                <p className={styles.page__text}>Removes a user from a specified group.</p>
                <p className={styles.page__text}><strong>Request Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "groupId": number,
    "userId": number
}`}
                    </pre>
                </div>
                <p className={styles.page__text}><strong>Response:</strong> Returns no content.</p>
            </div>

            <Link href="/" className={styles.page__link}>Go back to Home</Link>
        </div>
    );
};

export default GroupsPage;
