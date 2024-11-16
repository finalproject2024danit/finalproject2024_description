'use client';
import Link from 'next/link';
import styles from './usersPage.module.scss';

const UsersPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Users Page</h1>

            <div className={styles.page__info}>
                <p className={styles.page__text}><strong>Get user by ID:</strong> <code>/api/v1/users/user/'id'</code>
                </p>

                <p className={styles.page__text}><strong>Login:</strong> <code>/api/v1/auth/login</code>
                </p>
                <p className={styles.page__text}><strong>Object structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "email": "",
    "password": "",
}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Get all information about the user by ID:</strong>
                    <code>/api/v1/user_all_info/'id'</code>
                </p>

                <p className={styles.page__text}><strong>Get user by access token:</strong> <code>/api/v1/auth/get_user</code></p>
                <ul className={styles.page__list}>
                    <li>This endpoint retrieves the full information about a user by decoding the access token provided in the `Authorization` header.</li>
                    <li><strong>Request Method:</strong> POST</li>
                    <li><strong>Headers:</strong>
                        <ul>
                            <li><code>Authorization</code>: Bearer <em>access_token</em></li>
                        </ul>
                    </li>
                    <li><strong>Response:</strong> A <code>ResponseUserAllDataDto</code> object containing all user details.</li>
                    <li>If the token is invalid or expired, an error response is returned.</li>
                </ul>

                <p className={styles.page__text}><strong>Response Object structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "id": number,
    "firstName": "",
    "lastName": "",
    "email": "",
    "gender": "MALE | FEMALE | NOT_SPECIFIED",
    "dateOfBirth": number,
    "avatar": "",
    "phones": ["+1234567890"],
    "photoData": "",
    "createdDate": "ISO date string",
    "lastModifiedDate": "ISO date string"
}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Get friends by User ID:</strong>
                    <code>/api/v1/users/'userId'/friends</code></p>

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

                <p className={styles.page__text}><strong>Search users by full name:</strong>
                    <code>/api/v1/users/search?fullName='fullName'</code></p>
                <p className={styles.page__text}><strong>Description:</strong></p>
                <ul className={styles.page__list}>
                    <li>This endpoint allows you to search for users by their full name, which consists of a first name
                        and an optional last name.
                    </li>
                    <li><strong>Parameters:</strong></li>
                    <ul>
                        <li><strong>fullName:</strong> A string representing the user's full name. The first name is
                            required, while the last name is optional.
                        </li>
                    </ul>
                    <li><strong>Response:</strong> Returns a list of <code>ResponseUserDto</code> objects that match the
                        search criteria.
                    </li>
                    <li>If only the first name is provided, the method will return users matching that first name. If
                        both first and last names are provided, it will return users matching both.
                    </li>
                </ul>

                <p className={styles.page__text}><strong>Validation Constraints for PATCH and CREATE:</strong></p>
                <ul className={styles.page__list}>
                    <li className={styles.page__item}><strong>firstName:</strong> Not blank, max 100 characters.</li>
                    <li className={styles.page__item}><strong>lastName:</strong> Not blank, max 100 characters.</li>
                    <li className={styles.page__item}><strong>email:</strong> Not blank, valid email format, max 100
                        characters.
                    </li>
                    <li className={styles.page__item}><strong>password:</strong> Not blank, must
                        meet <code>@ValidPassword</code> criteria.
                    </li>
                    <li className={styles.page__item}><strong>gender:</strong> Not blank, one of: <code>MALE, FEMALE,
                        NOT_SPECIFIED</code>.
                    </li>
                    <li className={styles.page__item}><strong>dateOfBirth:</strong> Not blank, must be a valid timestamp
                        (number).
                    </li>
                    <li className={styles.page__item}><strong>avatar:</strong> Not blank.</li>
                    <li className={styles.page__item}><strong>phones:</strong> Not blank, must
                        match <code>+?[1-9]\d{"1,14"}</code> format.
                    </li>
                    <li className={styles.page__item}><strong>photoData:</strong> Not blank.</li>
                </ul>
            </div>

            <Link href="/" className={styles.page__link}>Go back to Home</Link>
        </div>
    );
};

export default UsersPage;
