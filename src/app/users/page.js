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
                    <code>/api/v1/users/filter?startPage='startPage'&perPage='perPage'&sortBy='sortBy'&sortDirection='sortDirection'</code></p>

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
            </div>

            <Link href="/" className={styles.link}>Go back to Home</Link>
        </div>
    );
};

export default Page;
