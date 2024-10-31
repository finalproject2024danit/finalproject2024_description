'use client';
import Link from 'next/link';
import styles from './friendsPage.module.scss';

const FriendsPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Friends Page</h1>

            <div className={styles.page__info}>
                <p className={styles.page__text}><strong>Search Friends by Full Name:</strong> <code>/api/v1/friends/search?currentUserId='currentUserId'&fullName='fullName'</code></p>
                <p className={styles.page__text}><strong>Description:</strong></p>
                <ul className={styles.page__list}>
                    <li>This endpoint allows you to search for friends based on their full name, which includes a required first name and an optional last name.</li>
                    <li><strong>Parameters:</strong></li>
                    <ul>
                        <li><strong>currentUserId:</strong> The ID of the user performing the search.</li>
                        <li><strong>fullName:</strong> A string representing the user's full name; the first name is mandatory, while the last name is optional.</li>
                    </ul>
                    <li><strong>Response:</strong> Returns a list of <code>ResponseUserDto</code> objects representing the friends that match the search criteria. The current user is excluded from the results.</li>
                </ul>

                <p className={styles.page__text}><strong>Add a Friend:</strong> <code>/api/v1/friends/add?userFromId='userFromId'&userToId='userToId'</code></p>

                <p className={styles.page__text}><strong>Delete a Friend by ID:</strong> <code>/api/v1/friends/delete/'id'</code></p>

                <p className={styles.page__text}><strong>Object structure when adding a Friend:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "userFromId": number,
    "userToId": number
}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Validation Constraints:</strong></p>
                <ul className={styles.page__list}>
                    <li className={styles.page__item}><strong>userFromId:</strong> Must be a valid user ID (number).</li>
                    <li className={styles.page__item}><strong>userToId:</strong> Must be a valid user ID (number).</li>
                </ul>
            </div>

            <Link href="/" className={styles.page__link}>Go back to Home</Link>
        </div>
    );
};

export default FriendsPage;
