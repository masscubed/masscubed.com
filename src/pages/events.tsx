// Events page, lists upcoming events pulled from google calander. Don't touch this unless google calander isn't working or in use anymore

import Layout from '../components/Layout';
import { GetStaticProps } from 'next';

interface Event {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
  location: string;
  htmlLink: string;
  isAllDay: boolean;
}

interface EventsPageProps {
  events: Event[];
  error: string | null;
}

export default function Events({ events, error }: EventsPageProps) {

  const processDescription = (description: string) => {
    if (!description) return '';

    return description
      .replace(/\n/g, '<br>')
      .replace(/\r/g, '')
      .trim();
  };

  const formatDate = (dateString: string, isAllDay: boolean) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Australia/Melbourne',
      day: '2-digit',
      month: '2-digit'
    };
    
    if (!isAllDay) {
      options.hour = '2-digit';
      options.minute = '2-digit';
    }
    
    return date.toLocaleDateString('en-AU', options);
  };

  // can touch here downwards
  return (
    <Layout title="MASS Cubed—Events" description="Monash Advanced Science & Science Scholars Society">
      <main>
        <header className="bottom-horizontal">
          <h1>Events</h1>
        </header>
        <p>Throughout the year we run many events, from trivia nights to mixers
          with fellow students or academics.</p>
        {/* Google Calendar embed, dont touch below this*/}
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
        
        {error && <p>Error loading events: {error}</p>}
        {!error && events && events.length === 0 && <p>No upcoming events found.</p>}
        
        {!error && events && events.map((event) => (
          <div key={event.id} style={{ marginBottom: '1.5rem' }}>
            <h3>{formatDate(event.start, event.isAllDay)}: {event.title}</h3>
            {event.location && <p><strong>Location:</strong> {event.location}</p>}
            {event.description && (
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: processDescription(event.description)
                }} 
              />
            )}
            {event.htmlLink && (
              <p>
                <a 
                  href={event.htmlLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{color:'var(--c-darkcyan)',textDecoration: 'none'}}
                >
                  View in Calendar
                </a>
              </p>
            )}
          </div>
        ))}
      </main>
    </Layout>
  );
}

// If google calander isn't working or in use anymore, update this
const getEvents = (): Event[] => [
  {
    id: '5fls88ifd3jt59nobg6ioifoj3@google.com',
    title: 'Trivia Night',
    description: '',
    start: '2026-03-13T00:00:00.000Z',
    end: '2026-03-14T00:00:00.000Z',
    location: '',
    htmlLink: '',
    isAllDay: false,
  },
  {
    id: '6q4s4kt7c1hu30nk8a547g5etd@google.com',
    title: 'MASS³ OGM',
    description: 'Hi there, \n\nIsabella Ferguson is inviting you to a scheduled Zoom meeting. \n\nJoin from a PC, Mac, iPad, iPhone or Android device: \n\n    Please click this URL to start or join. <a href="https://www.google.com/url?q=https://monash.zoom.us/j/85742639449?pwd%3DMHa7zsZwVeyQeCX2wM1TjmgD2iDiY8.1&amp;sa=D&amp;source=calendar&amp;ust=1773539302026801&amp;usg=AOvVaw0gY7fyvOMACvH0OetlqNrD" target="_blank">https://monash.zoom.us/j/85742639449?pwd=MHa7zsZwVeyQeCX2wM1TjmgD2iDiY8.1</a> \n    Or, go to <a href="https://www.google.com/url?q=https://monash.zoom.us/join&amp;sa=D&amp;source=calendar&amp;ust=1773539302026801&amp;usg=AOvVaw3P2Zx3sMK5H3J0rGVsSBHD" target="_blank">https://monash.zoom.us/join</a> and enter meeting ID: 857 4263 9449  and passcode: 491418\n        Ensure your device has a dedicated microphone and webcam.\n        **Please do not share these details with those not on the participant list**\n\n \nJoin from a dial-in phone: \n\n    Dial: +61 3 990 59666 [+61 3 9905 ZOOM] or +61 2 8015 2088\n    Meeting ID: 857 4263 9449 \n    International numbers available: <a href="https://www.google.com/url?q=https://monash.zoom.us/u/kdsh1TNjLI&amp;sa=D&amp;source=calendar&amp;ust=1773539302026801&amp;usg=AOvVaw0YVIBq-vSnhjWHBCkkW0hG" target="_blank">https://monash.zoom.us/u/kdsh1TNjLI</a> \n\n\nJoin from a Video capable room system(H.323/SIP): \n\nDial:\n    61262227588 (From within Monash only) \n  or:\n    103.122.166.55 (IP) or\n    <a href="https://www.google.com/url?q=http://zmau.us&amp;sa=D&amp;source=calendar&amp;ust=1773539302026801&amp;usg=AOvVaw26h9JmSXpcSYbVNVFzWUji" target="_blank">zmau.us</a> (Backup)\n\n    Meeting ID: 857 4263 9449 \n    Passcode: 491418\n\n\n============================================\nUse of Zoom is subject to Monash University’s IT Acceptable Use Procedure: <a href="https://www.google.com/url?q=https://publicpolicydms.monash.edu/Monash/documents/1909280&amp;sa=D&amp;source=calendar&amp;ust=1773539302026801&amp;usg=AOvVaw3CkP2EH7L3Rs4YgSBpIhqr" target="_blank">https://publicpolicydms.monash.edu/Monash/documents/1909280</a>\n \nFor information relating to the handling of your personal information please refer to Monash University’s Data Protection and Privacy Procedure: <a href="https://www.google.com/url?q=https://publicpolicydms.monash.edu/Monash/documents/1909233&amp;sa=D&amp;source=calendar&amp;ust=1773539302026801&amp;usg=AOvVaw0tS03Lf0X-FDt-FtrXzs9X" target="_blank">https://publicpolicydms.monash.edu/Monash/documents/1909233</a>\n \nIf you have any questions about how Monash University is collecting and handling your personal information, please contact our Data Protection and Privacy Office at <a href="mailto:dataprotectionofficer@monash.edu" target="_blank">dataprotectionofficer@monash.edu</a>.\n============================================',
    start: '2026-03-26T05:00:00.000Z',
    end: '2026-03-26T06:30:00.000Z',
    location: 'https://monash.zoom.us/j/85742639449?pwd=MHa7zsZwVeyQeCX2wM1TjmgD2iDiY8.1',
    htmlLink: '',
    isAllDay: false,
  }
];

export const getStaticProps: GetStaticProps<EventsPageProps> = async () => {
  try {
    const events = getEvents();
    return {
      props: {
        events,
        error: null,
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    
    return {
      props: {
        events: [],
        error: error instanceof Error ? error.message : 'Failed to load events',
      },
    };
  }
};
