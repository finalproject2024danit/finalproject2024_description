'use client';
import Link from 'next/link';
import styles from './usersPage.module.scss';

const Page = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Users Page</h1>

            <div className={styles.infoContainer}>
                <p><strong>Get user by ID:</strong> <code>/api/v1/users/user/'id'</code></p>

                <p><strong>Get users by filter:</strong>
                    <code>/api/v1/users/filter?startPage='startPage'&perPage='perPage'&sortBy='sortBy'&sortDirection='sortDirection'</code>
                </p>

                <p><strong>Create user:</strong> <code>/api/v1/users/create</code></p>

                <p><strong>Object structure:</strong></p>
                <div className={styles.objectContainer}>
                    <pre className={styles.objectStructure}>
                        {`{
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "gender": "MALE | FEMALE | NOT_SPECIFIED",
    "dateOfBirth": number,
    "avatar": "",
    "phones": "",
    "photoData": ""
}`}
                    </pre>
                </div>
                <p><strong>Patch user:</strong> <code>/api/v1/users/patch/'id'</code></p>

                <p><strong>Object structure for PATCH:</strong></p>
                <div className={styles.objectContainer}>
                    <pre className={styles.objectStructure}>
                        {`{
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "gender": "MALE | FEMALE | NOT_SPECIFIED",
    "dateOfBirth": number,
    "avatar": "",
    "phones": "+1234567890",
    "photoData": ""
}`}
                    </pre>
                </div>

                <p><strong>Validation Constraints for PATCH:</strong></p>
                <ul>
                    <li><strong>firstName:</strong> Not blank, max 100 characters.</li>
                    <li><strong>lastName:</strong> Not blank, max 100 characters.</li>
                    <li><strong>email:</strong> Not blank, valid email format, max 100 characters.</li>
                    <li><strong>password:</strong> Not blank, must meet <code>@ValidPassword</code> criteria.</li>
                    <li><strong>gender:</strong> Not blank, one of: <code>MALE, FEMALE, NOT_SPECIFIED</code>.</li>
                    <li><strong>dateOfBirth:</strong> Not blank, must be a valid timestamp (number).</li>
                    <li><strong>avatar:</strong> Not blank.</li>
                    <li><strong>phones:</strong> Not blank, must match <code>+?[1-9]\d{"1,14"}</code> format.</li>
                    <li><strong>photoData:</strong> Not blank.</li>
                </ul>
            </div>

            <Link href="/" className={styles.link}>Go back to Home</Link>
        </div>
    );
};

export default Page;
