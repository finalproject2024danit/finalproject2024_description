'use client';
import Link from 'next/link';
import styles from './messagesPage.module.scss';

const MessagesPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Messages Page</h1>

            <div className={styles.page__info}>
                <p className={styles.page__text}><strong>Send a Message:</strong> Use WebSocket
                    endpoint <code>/chat</code> with the following object structure:</p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`{
    "content": "",
    "userFrom": number,
    "userTo": number
}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Get Messages Between Two Users:</strong>
                    <code>/api/v1/messages/between/'userFromId'/'userToId'</code></p>

                <p className={styles.page__text}><strong>Get a Message by ID:</strong>
                    <code>/api/v1/messages/'id'</code></p>

                <p className={styles.page__text}><strong>Get All Conversations for a User:</strong></p>
                <p className={styles.page__text}>Use the
                    endpoint <code>/api/v1/messages/conversations/'userId'</code> to get all conversations for a
                    specific user. This will return a list of conversations, where each conversation consists of
                    messages between two users.</p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`GET /api/v1/messages/conversations/{userId}`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Object structure for response:</strong></p>
                <div className={styles.page__object}>
                    <pre className={styles.page__code}>
                        {`[
    {
        "user1Id": number,
        "user2Id": number,
        "messages": [
            {
                "content": "Message content",
                "userFrom": number,
                "userTo": number,
                "messageTime": "timestamp"
            },
            ...
        ]
    }
]`}
                    </pre>
                </div>

                <p className={styles.page__text}><strong>Validation Constraints for Sending a Message:</strong></p>
                <ul className={styles.page__list}>
                    <li className={styles.page__item}><strong>content:</strong> Not blank, max 500 characters.</li>
                    <li className={styles.page__item}><strong>userFrom:</strong> Must be a valid user ID (number).</li>
                    <li className={styles.page__item}><strong>userTo:</strong> Must be a valid user ID (number).</li>
                </ul>
            </div>

            <Link href="/" className={styles.page__link}>Go back to Home</Link>
        </div>
    );
};

export default MessagesPage;
