'use client';
import Link from 'next/link';

const Page = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Users Page</h1>
            <p>Here you can see all the users.</p>
            <Link href="/">Go back to Home</Link>
        </div>
    );
}

export default Page;