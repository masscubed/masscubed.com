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
    
    // Clean up the description and ensure consistent HTML
    return description
      .replace(/\n/g, '<br>')
      .replace(/\r/g, '')
      .trim();
  };

  const formatDate = (dateString: string, isAllDay: boolean) => {
    const date = new Date(dateString);
    // Use consistent timezone to avoid hydration issues
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

// Sample events data - in production, this would come from a real calendar
const getSampleEvents = (): Event[] => [
  {
    id: '3dgfccehq0mvaps7r5ntf114i4@google.com',
    title: 'Monash Advanced Science: Career & Industry Insider',
    description: '<p>If you plan to attend, please fill out this form <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4jJqE5VJGIYaXch1IY8k0f6XfLj7EuTYuk5WMsSFNuR2p-g/viewform?usp=dialog"><u>here</u></a>.</p><p dir="ltr">MASS³ is the Monash University student club for the Advanced Science courses and aims to foster student community, providing opportunities to further students’ university experience through events such as this one. As part of this event, we would appreciate it if you could give a brief (5-10 minute) presentation about your professional journey, the key moments that have defined your career, and the challenges you are yet to overcome.</p><p dir="ltr">There will also be time for informal networking afterwards. Student questions have included:</p><ul><li dir="ltr"><p dir="ltr">How can you change fields/professions later in your career with the most success?</p></li><li dir="ltr"><p dir="ltr">How do you navigate a biased field or workplace? (Bias may include prejudice, discrimination, etc.)</p></li><li dir="ltr"><p dir="ltr">How do you establish and maintain professional connections?</p></li></ul>\n\nJoin with Google Meet: https://meet.google.com/gfr-xquh-pfj\nOr dial: (AU) +61 2 9051 7019 PIN: 123456999#\nMore phone numbers: https://tel.meet/gfr-xquh-pfj?pin=8872539299574&hs=7\n\nLearn more about Meet at: https://support.google.com/a/users/answer/9282720',
    start: '2025-09-25T08:00:00.000Z',
    end: '2025-09-25T11:00:00.000Z',
    location: 'Monash University Clayton Campus, Wellington Rd, Clayton VIC 3800, Australia',
    htmlLink: '',
    isAllDay: false,
  },
  {
    id: '4jeqjdtr4ih9oo1t1736rfvbsr@google.com',
    title: 'Mid-Semester Party ',
    description: '<a href="https://www.eventbrite.com.au/e/mass3-midsem-social-night-tickets-1681470636939?aff=oddtdtcreator">https://www.eventbrite.com.au/e/mass3-midsem-social-night-tickets-1681470636939?aff=oddtdtcreator</a>',
    start: '2025-09-30T09:00:00.000Z',
    end: '2025-09-30T14:00:00.000Z',
    location: '',
    htmlLink: '',
    isAllDay: false,
  },
  {
    id: '4bjg89rfbu4pseca3hl70gkfia@google.com',
    title: 'MASS2',
    description: '<span>MASS² is your chance to present your research to a captive audience, get real-time feedback on your presentation skills, and perfect your communication skills.<br>Whether it\'s a first, second, or third year research project, or even Honors or PhD, we want to hear about it!<br><br>With the choice of displaying a poster, giving a short talk, or both, fill out the EOI below to submit your research!<br><br><strong>Date:</strong> Wednesday, 8th October<br><strong>Time</strong>: 6:00pm<br><strong>Location</strong>: Green Chemical Futures Auditorium</span>',
    start: '2025-10-07T13:00:00.000Z',
    end: '2025-10-08T13:00:00.000Z',
    location: '',
    htmlLink: '',
    isAllDay: false,
  }
];

export const getStaticProps: GetStaticProps<EventsPageProps> = async () => {
  try {
    // For static export, we'll use sample events
    // In a real deployment, you might want to fetch from an external API
    // and rebuild the site periodically using GitHub Actions
    const events = getSampleEvents();
    
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
