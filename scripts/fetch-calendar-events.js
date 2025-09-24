const fs = require('fs');
const path = require('path');
const ical = require('node-ical');

// Function to fetch from Google Calendar using iCalendar feed
const fetchFromGoogleCalendar = async () => {
  try {
    // Use the iCalendar feed URL for the public calendar
    const calendarUrl = 'https://calendar.google.com/calendar/ical/c_cd6125390sq2l7311nlirr58ug%40group.calendar.google.com/public/basic.ics';
    
    const response = await fetch(calendarUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch calendar: ${response.status} ${response.statusText}`);
    }
    
    const icalData = await response.text();
    
    // Parse the iCalendar data using node-ical
    const parsed = ical.parseICS(icalData);
    
    // Get current time
    const now = new Date();
    
    // Filter and sort events
    const events = Object.values(parsed)
      .filter((event) => {
        if (event.type !== 'VEVENT') return false;
        if (!event.start) return false;
        
        const eventStart = new Date(event.start);
        return eventStart >= now;
      })
      .sort((a, b) => {
        const dateA = new Date(a.start);
        const dateB = new Date(b.start);
        return dateA.getTime() - dateB.getTime();
      })
      .slice(0, 5); // Get only the next 5 events
    
    // Format the events for the frontend
    const formattedEvents = events.map((event) => {
      const start = event.start ? new Date(event.start).toISOString() : '';
      const end = event.end ? new Date(event.end).toISOString() : '';
      const isAllDay = event.start && typeof event.start === 'string' && event.start.length === 8; // YYYYMMDD format indicates all-day
      
      return {
        id: event.uid || Math.random().toString(36).substr(2, 9),
        title: event.summary || 'Untitled Event',
        description: event.description || '',
        start: start,
        end: end,
        location: event.location || '',
        htmlLink: event.url || '',
        isAllDay: Boolean(isAllDay),
      };
    });

    return formattedEvents;
  } catch (error) {
    console.error('Error fetching from Google Calendar:', error);
    throw error;
  }
};

// Update the events page
const updateEventsPage = async () => {
  try {
    let events;
    let source = 'sample-data';
    
    try {
      events = await fetchFromGoogleCalendar();
      source = 'google-calendar';
      console.log(`Successfully fetched ${events.length} events from Google Calendar`);
    } catch (error) {
      console.warn('Failed to fetch from Google Calendar, using sample events:', error);
      events = getSampleEvents();
      source = 'sample-data-fallback';
    }
    
    // Read the current events page
    const eventsPagePath = path.join(__dirname, '..', 'src', 'pages', 'events.tsx');
    let eventsPageContent = fs.readFileSync(eventsPagePath, 'utf8');
    
    // Generate the new events array with proper escaping
    const eventsArray = events.map(event => {
      const escapedTitle = event.title.replace(/'/g, "\\'").replace(/\n/g, '\\n');
      const escapedDescription = event.description.replace(/'/g, "\\'").replace(/\n/g, '\\n');
      const escapedLocation = event.location.replace(/'/g, "\\'").replace(/\n/g, '\\n');
      
      return `  {
    id: '${event.id}',
    title: '${escapedTitle}',
    description: '${escapedDescription}',
    start: '${event.start}',
    end: '${event.end}',
    location: '${escapedLocation}',
    htmlLink: '${event.htmlLink}',
    isAllDay: ${event.isAllDay},
  }`;
    }).join(',\n');
    
    // Replace the events array in the file
    const newEventsArray = `const getSampleEvents = (): Event[] => [\n${eventsArray}\n];`;
    
    eventsPageContent = eventsPageContent.replace(
      /const getSampleEvents = \(\): Event\[\] => \[[\s\S]*?\];/,
      newEventsArray
    );
    
    // Write the updated file
    fs.writeFileSync(eventsPagePath, eventsPageContent);
    
    console.log(`Updated events page with ${events.length} events from ${source}`);
  } catch (error) {
    console.error('Error updating events page:', error);
    process.exit(1);
  }
};

// Sample events fallback
const getSampleEvents = () => [
  {
    id: 'sample-1',
    title: 'Trivia Night',
    description: 'Team up with your friends (or meet new people!) for one of the most competitive events of the year! Pizza, snacks and drinks will be provided from 6:30pm.',
    start: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000).toISOString(),
    location: 'Common Room, 19 Rainforest Walk',
    htmlLink: 'https://www.eventbrite.com.au/e/mass3-trivia-night-2025-tickets-1265652232899',
    isAllDay: false,
  },
  {
    id: 'sample-2',
    title: 'Ordinary General Meeting (OGM)',
    description: 'The first club meeting of the year! Run or vote for our first year representative positions. More information, including location, will be provided in the official OGM announcement.',
    start: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    end: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(),
    location: 'TBA',
    htmlLink: '',
    isAllDay: false,
  }
];

// Run the update
updateEventsPage();
