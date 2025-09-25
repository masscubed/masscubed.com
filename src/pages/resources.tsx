// Resources page for MASS Cubed website, touch as much as you wish

import Layout from '../components/Layout';
import Link from 'next/link';

export default function Resources() {
  return (
    <Layout title="MASS Cubed—Resources" description="Monash Advanced Science & Science Scholars Society">
      <main>
        <header className="bottom-horizontal">
          <h1>Resources</h1>
        </header>
        <h2>Course information</h2>
        <p>Whether you're a returning student or a first year in 2025, course planning can be hard!
          You can find basic enrolment information and helpful videos on the Monash science website:</p>
        <ul>
          <li> <a href="https://www.monash.edu/science/enrolment/tools-to-help-you-enrol-in-science-units/advanced-research-enrolment" style={{color:'var(--c-darkcyan)',textDecoration: 'none'}}> Advanced Research</a></li>
          <li> <a href="https://www.monash.edu/science/enrolment/tools-to-help-you-enrol-in-science-units/global-challenges-enrolment" style={{color:'var(--c-darkcyan)',textDecoration: 'none'}}> Global Challenges</a></li>
          <li> <a href="https://www.monash.edu/science/enrolment/tools-to-help-you-enrol-in-science-units/applied-data-science-and-applied-data-science-advanced-honours" style={{color:'var(--c-darkcyan)',textDecoration: 'none'}}> Advanced Data Science</a></li>
        </ul>
        <p>
          Furthermore, each of these has a unit map and suggested semester plans.
          These can be found in each respective course's <a href="https://handbook.monash.edu/" style={{color:'var(--c-darkcyan)',textDecoration: 'none'}}>handbook page</a>.
        </p>
        <h2>Club information</h2>
        <div style={{textAlign:'center'}}> <Link href="/links" className="newsletter-button">Event and social media links</Link></div>
        <div style={{textAlign:'center'}}> <Link href="/majors" className="newsletter-button">Major matchmakers</Link></div>
      </main>
    </Layout>
  );
}