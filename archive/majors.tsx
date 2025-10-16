// TODO: prob nuke / archive this

import Layout from '../src/components/Layout';

export default function Majors() {
  return (
    <Layout title="MASS Cubed—Major Matchmakers" description="Monash Advanced Science & Science Scholars Society">
      <main className="majors-page">
        <header className="bottom-horizontal">
          <h1>Major Matchmakers</h1>
        </header>
        <p>Our course has so many majors to choose from! Hear from current and previous cubers about what their major
        entails, which may help if you are lost on what to do.</p>

        <h2>2022 Archive</h2>
        <p>You can find the archived 2022 major matchmaker document <a href="https://docs.google.com/document/d/1cyk1cPrYKPFBJGEEguDjLmVbm2GZlqrOGsgwQs2hlyA/edit?usp=sharing" style={{color:'var(--c-darkcyan)',textDecoration: 'none'}}>here</a>.</p>
      </main>
    </Layout>
  );
}
