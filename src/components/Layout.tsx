import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = 'MASS Cubed', description = 'Monash Advanced Science & Science Scholars Society' }: LayoutProps) {
  const router = useRouter();
  
  const isCurrentPage = (path: string) => {
    if (path === '/' && router.pathname === '/') return true;
    if (path !== '/' && router.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Monash, clubs, university, science, MASS3" />
        <meta name="description" content={description} />
        <meta name="author" content="Luke Attrill" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/icons/favicon.ico" />
      </Head>
      
      <header className="flex items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image 
            className="nav-bar-logo"
            src="/assets/images/logo-darkblue.png"
            alt="MASS Cubed logo"
            width={150}
            height={100}
          />
        </Link>
        <nav className="flex items-center !space-x-50">
          <Link href="/" className={isCurrentPage('/') ? 'current-page' : ''}>Home</Link>
          <Link href="/events" className={isCurrentPage('/events') ? 'current-page' : ''}>Events</Link>
          <Link href="/committee" className={isCurrentPage('/committee') ? 'current-page' : ''}>Committee</Link>
          <Link href="/resources" className={isCurrentPage('/resources') ? 'current-page' : ''}>Resources</Link>
          <Link href="/newsletter" className={isCurrentPage('/newsletter') ? 'current-page' : ''}>Newsletter</Link>
          <Link href="/contact" className={isCurrentPage('/contact') ? 'current-page' : ''}>Contact</Link>
        </nav>
      </header>
      
      {children}
    </>
  );
}
