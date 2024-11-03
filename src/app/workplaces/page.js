'use client';
import Link from 'next/link';
import styles from './workplacesPage.module.scss';

const WorkplacesPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Workplace API Documentation</h1>

            <div className={styles.page__info}>
                <p className={styles.page__text}><strong>Get ALL Workplaces:</strong> Use the
                    endpoint <code>/api/v1/workplace</code> to get all workplaces.</p>

                <p className={styles.page__text}><strong>Get Workplace by ID:</strong> Use the
                    endpoint <code>/api/v1/workplace/{'<id>'}</code> to retrieve a specific workplace.</p>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
{`{
    "id": number,
    "name": "Workplace Name",
    "createdDate": "2024-01-01T00:00:00Z",
    "lastModifiedDate": "2024-01-01T00:00:00Z"
}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Add Workplace:</strong> Use the
                    endpoint <code>/api/v1/workplace/create</code> to add a new workplace with the following request
                    body structure:</p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
{`{
    "name": "New Workplace Name"
}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Validation Constraints for Adding a Workplace:</strong></p>
                <ul className={styles.page__list}>
                    <li className={styles.page__item}><strong>name:</strong> Not blank, max 100 characters.</li>
                </ul>

                <p className={styles.page__text}><strong>Update Workplace:</strong> Use the endpoint <code>/api/v1/workplace/update</code> with the following request body:</p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
{`{
    "userId": number, // Required, must not be null
    "id": number,     // Required, must not be null
    "name": "Updated Workplace Name" // Required, must not be blank
}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Validation Constraints for Updating a Workplace:</strong></p>
                <ul className={styles.page__list}>
                    <li className={styles.page__item}><strong>userId:</strong> Must not be null.</li>
                    <li className={styles.page__item}><strong>id:</strong> Must not be null.</li>
                    <li className={styles.page__item}><strong>name:</strong> Must not be blank.</li>
                </ul>

                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
{`{
    "id": number,
    "name": "Updated Workplace Name",
    "createdDate": "2024-01-01T00:00:00Z",
    "lastModifiedDate": "2024-01-02T00:00:00Z"
}`}
                    </pre>
                </div>
            </div>

            <Link href="/" className={styles.page__link}>Go back to Home</Link>
        </div>
    );
};

export default WorkplacesPage;
