// Contact page for MASS Cubed website, pretty self explanatory

import Layout from '../components/Layout';
import Link from 'next/link';

export default function Contact() {
  return (
    <Layout title="MASS Cubed—Contact" description="Monash Advanced Science & Science Scholars Society">
      <main>
        <header className="bottom-horizontal">
          <h1>Contact</h1>
        </header>
        <p>
          For formal enquiries, please use our
          email mass3@monashclubs.org.
        </p>
        <p>
          To discover our events, check out our <Link href="/events">events
          calendar</Link> or head to our
          <a href="https://www.facebook.com/mass3monash">Facebook</a> or
          <a href="https://instagram.com/mass3monash?igshid=MzRlODBiNWFlZA==">Instagram</a> pages. Any other
          important links or ticketing information can be found <Link href="/links">here</Link>.
        </p>
        <p>
          For any informal topics or if you simply want to speak to a senior in
          the course, feel free to find any of <Link href="/committee">the committee</Link> on social media
          and send anyone a message. You can also usually find help in the common room!
        </p>
      </main>
    </Layout>
  );
}
