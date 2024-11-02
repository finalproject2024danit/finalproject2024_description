'use client';
import Link from 'next/link';
import styles from './hobbiesPage.module.scss';

const HobbiesPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Hobbies Page</h1>

            <div className={styles.page__info}>
                <p className={styles.page__text}><strong>Get Hobby by ID:</strong> <code>/api/v1/hobbies/{'<id>'}</code></p>
                <p className={styles.page__text}><strong>Description:</strong> Retrieves a hobby by its ID.</p>
                <p className={styles.page__text}><strong>Parameters:</strong></p>
                <ul>
                    <li><strong>id:</strong> The ID of the hobby you want to retrieve.</li>
                </ul>
                <p className={styles.page__text}><strong>Response:</strong> Returns a <code>ResponseHobbyDto</code> object representing the requested hobby.</p>
                <p className={styles.page__text}><strong>Example Response:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {JSON.stringify(
                            {
                                id: 1,
                                language: "English",
                                pet: "Dog",
                                interest: "Photography",
                                createdDate: "2024-11-02T10:00:00",
                                lastModifiedDate: "2024-11-02T10:00:00"
                            },
                            null,
                            2
                        )}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Update Hobby:</strong> <code>/api/v1/hobbies/update/{'<id>'}</code></p>
                <p className={styles.page__text}><strong>Description:</strong> Updates the properties of the hobby (language, pet, interest) for the given ID.</p>
                <p className={styles.page__text}><strong>Request Body:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {JSON.stringify(
                            {
                                language: "newLanguage",
                                pet: "newPet",
                                interest: "newInterest"
                            },
                            null,
                            2
                        )}
                    </pre>
                </div>
                <p className={styles.page__text}><strong>Response:</strong> Returns the updated <code>ResponseHobbyDto</code> object.</p>
                <p className={styles.page__text}><strong>Example Response:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {JSON.stringify(
                            {
                                id: 1,
                                language: "newLanguage",
                                pet: "newPet",
                                interest: "newInterest",
                                createdDate: "2024-11-02T10:00:00",
                                lastModifiedDate: "2024-11-02T10:05:00"
                            },
                            null,
                            2
                        )}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Validation Constraints:</strong></p>
                <ul className={styles.page__list}>
                    <li className={styles.page__item}><strong>language:</strong> Must be a valid string.</li>
                    <li className={styles.page__item}><strong>pet:</strong> Must be a valid string.</li>
                    <li className={styles.page__item}><strong>interest:</strong> Must be a valid string.</li>
                </ul>
            </div>

            <Link href="/" className={styles.page__link}>Go back to Home</Link>
        </div>
    );
};

export default HobbiesPage;
