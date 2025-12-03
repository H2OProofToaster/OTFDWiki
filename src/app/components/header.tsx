import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <Link href="/wiki">
                Wiki
            </Link>
        </header>
    );
}