import { MainLayout } from "../../components/layouts/MainLayout";
import Link from 'next/link'

export default function ContactPage() {
    return (
        <>
            <MainLayout>
                <h1>contact Page</h1>

                <h1 className="title">
                    {/* Ir a <a href="/about">About</a> */}
                    Ir a <Link href="/">home</Link>
                </h1>

                <p className={'description'}>
                    Get started by editing{' '}
                    <code className={'code'}>pages/index.js</code>
                </p>
            </MainLayout>
        </>
    )
}
