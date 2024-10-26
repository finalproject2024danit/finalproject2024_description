'use client';
import Link from 'next/link';
import styles from './newsPage.module.scss';

const NewsPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>News Page</h1>

            <div className={styles.page__info}>
                <p className={styles.page__text}><strong>Get news by ID:</strong> <code>/api/v1/news/'id'</code></p>

                <p className={styles.page__text}><strong>Get news by filter:</strong>
                    <code>/api/v1/news/filter?startPage='startPage'&perPage='perPage'&sortBy='sortBy'&sortDirection='sortDirection'</code>
                </p>

                <p className={styles.page__text}><strong>Object structure for News:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "id": number,
    "title": "string",
    "description": "string",
    "image": "string",
    "createdDate": "timestamp",
    "lastModifiedDate": "timestamp"
}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Validation Constraints:</strong></p>
                <ul className={styles.page__list}>
                    <li className={styles.page__item}><strong>title:</strong> Not blank, max 200 characters.</li>
                    <li className={styles.page__item}><strong>description:</strong> Not blank, max 500 characters.</li>
                    <li className={styles.page__item}><strong>image:</strong> Must be a valid URL.</li>
                    <li className={styles.page__item}><strong>createdDate:</strong> Automatically generated.</li>
                    <li className={styles.page__item}><strong>lastModifiedDate:</strong> Automatically generated.</li>
                </ul>
            </div>

            <Link href="/" className={styles.page__link}>Go back to Home</Link>
        </div>
    );
};

export default NewsPage;
