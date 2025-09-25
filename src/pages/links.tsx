// TODO: nuke this page and combine with contact page
// Links page for MASS Cubed website, contains links to socials, newsletter signup, and event

import Layout from '../components/Layout';
import Link from 'next/link';

export default function Links() {
  return (
    <Layout title="MASS Cubed—Links" description="Monash Advanced Science & Science Scholars Society">
      <main className="links-page">
        <header className="bottom-horizontal">
          <h1>Links</h1>
        </header>
        <div className="newsletter-buttons">
          <div>
              <a className="newsletter-button" href="https://clubs.msa.monash.edu/organisation/7269/">Register to become a member!</a>
          </div>
          <div>
              <a className="newsletter-button" href="https://www.facebook.com/groups/masscubed/">Facebook group</a>
          </div>
          <div>
              <a className="newsletter-button" href="https://www.instagram.com/mass3monash/?img_index=1">Instagram page</a>
          </div>
          <div>
              <a className="newsletter-button" href="https://monashclubs.us10.list-manage.com/subscribe?u=94da5584ddd034b962e2df99e&id=5ccce0e4c2"> Subscribe to our newsletter!</a>
          </div>
      </div>
      <h2>Upcoming event tickets</h2>
      <p>View other upcoming events on our <Link href="/events">events page</Link>. Tickets will be linked below or on any of our social media pages when available.</p>    
      <div>
        <a className="newsletter-button" href="https://docs.google.com/forms/d/e/1FAIpQLSdkKQXJALGEkFfljV4xZFwquj5qaJRfdx0Tep2_bVHVsaSFRA/viewform">EOI: Presentations at MASS Squared</a>
    </div>
      </main>
    </Layout>
  );
}
