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
    id: 'sample-1',
    title: 'Trivia Night',
    description: 'Team up with your friends (or meet new people!) for one of the most competitive events of the year! Pizza, snacks and drinks will be provided from 6:30pm.',
    start: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week from now
    end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000).toISOString(), // 3 hours later
    location: 'Common Room, 19 Rainforest Walk',
    htmlLink: 'https://www.eventbrite.com.au/e/mass3-trivia-night-2025-tickets-1265652232899',
    isAllDay: false,
  },
  {
    id: 'sample-2',
    title: 'Ordinary General Meeting (OGM)',
    description: 'The first club meeting of the year! Run or vote for our first year representative positions. More information, including location, will be provided in the official OGM announcement.',
    start: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 2 weeks from now
    end: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(), // 2 hours later
    location: 'TBA',
    htmlLink: '',
    isAllDay: false,
  },
  {
    id: 'sample-3',
    title: 'Powerpoint Evening',
    description: 'Present whatever powerpoint creation you choose to in a relaxed night with snacks and friends! Whether you choose to present something educational, funny, or blind-swap presentations with a friend, we can\'t wait to see your creative slideshows.',
    start: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString(), // 4 weeks from now
    end: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000).toISOString(), // 3 hours later
    location: 'Common Room, 19 Rainforest Walk',
    htmlLink: '',
    isAllDay: false,
  },
  {
    id: 'sample-4',
    title: 'Academic Mixer',
    description: 'Save the date for our annual academic and industry mixer event! This is a fantastic opportunity to meet both fellow students, and academics, with chances to network with possible project supervisors.',
    start: new Date(Date.now() + 49 * 24 * 60 * 60 * 1000).toISOString(), // 7 weeks from now
    end: new Date(Date.now() + 49 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000).toISOString(), // 4 hours later
    location: 'TBA',
    htmlLink: '',
    isAllDay: false,
  },
  {
    id: 'sample-5',
    title: 'Study Night',
    description: 'Join us for a focused study session with snacks and coffee provided. Great opportunity to study with fellow students and get help with assignments.',
    start: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).toISOString(), // 5 weeks from now
    end: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000).toISOString(), // 4 hours later
    location: 'Common Room, 19 Rainforest Walk',
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
