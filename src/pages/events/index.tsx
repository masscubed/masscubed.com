import Layout from '../../components/Layout';

export default function Events() {
  return (
    <Layout title="MASS Cubed—Events" description="Monash Advanced Science & Science Scholars Society">
      <main>
        <header className="bottom-horizontal">
          <h1>Events</h1>
        </header>
        <p>Throughout the year we run many events, from trivia nights to mixers
          with fellow students or academics.</p>
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Australia%2FMelbourne&bgcolor=%23ffffff&showTz=0&showPrint=0&title=MASS%C2%B3%20Event%20Schedule&showTitle=0&src=Y19jZDYxMjUzOTBzcTJsNzMxMW5saXJyNTh1Z0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%230D8B96" 
          style={{border:'solid 1px #777'}} 
          width="800" 
          height="600" 
          frameBorder="0" 
          scrolling="no"
        />
        <h2 className="bottom-horizontal">
          Upcoming event information: </h2>
          <h3>11/03: Trivia Night</h3>
          Team up with your friends (or meet new people!) for one of the most competitive events of the year!
          Pizza, snacks and drinks will be provided from 6:30pm. Tickets are available
        <a href="https://www.eventbrite.com.au/e/mass3-trivia-night-2025-tickets-1265652232899" style={{color:'var(--c-darkcyan)',textDecoration: 'none'}}>here</a>.
        <h3>26/03: Ordinary General Meeting (OGM)</h3>
          The first club meeting of the year! Run or vote for our first year representative positions. More information, including location, will be provided in the official OGM announcement.
          <h3>09/04: Powerpoint Evening</h3>
          Present whatever powerpoint creation you choose to in a relaxed night with snacks and friends! Whether you choose to present something educational,
          funny, or blind-swap presentations with a friend, we can't wait to see your creative slideshows. 
          <h3>01/05: Academic Mixer</h3>
          Save the date for our annual academic and industry mixer event! This is a fantastic opportunity to meet both fellow students, and academics, with chances to network with possible project supervisors. 
        <h2 className="bottom-horizontal">Completed events:</h2>
        <h3>24/02: Amazing Race</h3>
          Welcome the new first year students with a race throughout the campus, ending with a BBQ! Find us
          outside the common room at 19 Rainforest Walk.
      </main>
    </Layout>
  );
}
