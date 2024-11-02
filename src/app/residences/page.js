'use client';
import Link from 'next/link';
import styles from './residencesPage.module.scss';

const ResidencesPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Residences API Documentation</h1>

            <div className={styles.page__info}>
                <p className={styles.page__text}><strong>Get Residence by ID:</strong> Use the
                    endpoint <code>/api/v1/residences/{'<id>'}</code> to retrieve a specific residence.</p>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "id": number,
    "planet": "Planet Name",
    "country": "Country Name",
    "city": "City Name",
    "createdDate": "2024-01-01T00:00:00Z",
    "lastModifiedDate": "2024-01-01T00:00:00Z"
}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Update Residence:</strong> Use the
                    endpoint <code>/api/v1/residences/update/{'<id>'}</code> to update a specific residence.</p>
                <p className={styles.page__text}><strong>Request Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "planet": "New Planet Name",
    "country": "New Country Name",
    "city": "New City Name"
}`}
                    </pre>
                </div>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "id": number,
    "planet": "Updated Planet Name",
    "country": "Updated Country Name",
    "city": "Updated City Name",
    "createdDate": "2024-01-01T00:00:00Z",
    "lastModifiedDate": "2024-01-01T00:00:00Z"
}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Get All Residences:</strong> Use the
                    endpoint <code>/api/v1/residences/filter?page={'<page>'}&size={'<size>'}</code> to retrieve a paginated list of residences.</p>
                <p className={styles.page__text}><strong>Response Structure:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`[
    {
        "id": number,
        "planet": "Planet Name",
        "country": "Country Name",
        "city": "City Name",
        "createdDate": "2024-01-01T00:00:00Z",
        "lastModifiedDate": "2024-01-01T00:00:00Z"
    },
    ...
]`}
                    </pre>
                </div>
            </div>

            <Link href="/" className={styles.page__link}>Go back to Home</Link>
        </div>
    );
};

export default ResidencesPage;
