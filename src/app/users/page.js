'use client';
import Link from 'next/link';
import styles from './usersPage.module.scss';

const Page = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Users Page</h1>

            <div className={styles.page__info}>
                <p className={styles.page__text}><strong>Get user by ID:</strong> <code>/api/v1/users/user/'id'</code></p>

                <p className={styles.page__text}><strong>Get users by filter:</strong>
                    <code>/api/v1/users/filter?startPage='startPage'&perPage='perPage'&sortBy='sortBy'&sortDirection='sortDirection'</code>
                </p>

                <p className={styles.page__text}><strong>Create user:</strong> <code>/api/v1/users/create</code></p>

                <p className={styles.page__text}><strong>Object structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
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

                <p className={styles.page__text}><strong>Patch user:</strong> <code>/api/v1/users/patch/'id'</code></p>

                <p className={styles.page__text}><strong>Object structure for PATCH:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
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

                <p className={styles.page__text}><strong>Validation Constraints for PATCH and CREATE:</strong></p>
                <ul className={styles.page__list}>
                    <li className={styles.page__item}><strong>firstName:</strong> Not blank, max 100 characters.</li>
                    <li className={styles.page__item}><strong>lastName:</strong> Not blank, max 100 characters.</li>
                    <li className={styles.page__item}><strong>email:</strong> Not blank, valid email format, max 100 characters.</li>
                    <li className={styles.page__item}><strong>password:</strong> Not blank, must meet <code>@ValidPassword</code> criteria.</li>
                    <li className={styles.page__item}><strong>gender:</strong> Not blank, one of: <code>MALE, FEMALE, NOT_SPECIFIED</code>.</li>
                    <li className={styles.page__item}><strong>dateOfBirth:</strong> Not blank, must be a valid timestamp (number).</li>
                    <li className={styles.page__item}><strong>avatar:</strong> Not blank.</li>
                    <li className={styles.page__item}><strong>phones:</strong> Not blank, must match <code>+?[1-9]\d{"1,14"}</code> format.</li>
                    <li className={styles.page__item}><strong>photoData:</strong> Not blank.</li>
                </ul>
            </div>

            <Link href="/" className={styles.page__link}>Go back to Home</Link>
        </div>
    );
};

export default Page;
