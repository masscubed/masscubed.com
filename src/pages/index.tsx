import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="MASS Cubed" description="Monash Advanced Science & Science Scholars Society">
      <div className="banner">
        <img 
          className="main-logo"
          src="/assets/images/logo-white.svg"
          alt="MASS Cubed logo"
        />
      </div>
      <main className="home-page">
        <header className="bottom-horizontal">
          <h1>Monash Advanced Science & Science Scholars Society</h1>
        </header>
        <p>
          MASS³ (pronounced <em>mass cubed</em>) is a club for Monash students
          enrolled in
        </p>
        <ul>
          <li>the <em>Bachelor of Science Advanced - Research (Honours)</em>; or</li>
          <li>the <em>Bachelor of Science Advanced - Global Challenges
            (Honours)</em>; or</li>
          <li>the <em>Bachelor of Applied Data Science Advanced (Honours)</em>.</li>
        </ul>
        <p>
          Our purpose is to provide strong social and academic networks
          for high achieving students, particularly those who wish to proceed
          into academia or business. You can find our common room at 19 Rainforest Walk, 
          as seen in the
          <a href="http://monash.edu/pubs/maps/3-Claytoncolour.pdf" style={{color:'var(--c-darkcyan)',textDecoration: 'none'}}>Campus Map</a>, 
          located next to the tables on the right under the sheltered area. 
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
      </main>
    </Layout>
  );
}