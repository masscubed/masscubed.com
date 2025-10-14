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
  /* { // copy and paste this template including { and } below to add more events
    id: '3dgfccehq0mvaps7r5ntf114i4@google.com', // google calendar event id
    title: 'Title', // Event title
    description: '<p>If you plan to attend, please fill out this form <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4jJqE5VJGIYaXch1IY8k0f6XfLj7EuTYuk5WMsSFNuR2p-g/viewform?usp=dialog"><u>here</u></a>.</p>', // Event description, can include links
    start: '2025-09-25T08:00:00.000Z', // Event start time in ISO format
    end: '2025-09-25T11:00:00.000Z', // Event end time in ISO format
    location: 'Monash University Clayton Campus, Wellington Rd, Clayton VIC 3800, Australia', // Event location as an address or text
    htmlLink: '', // Link to the event on Google Calendar
    isAllDay: false, // Whether the event is an all-day event
  },
  */
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
