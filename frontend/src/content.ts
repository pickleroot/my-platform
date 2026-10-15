import type { NewsArticle, Profile } from './types';

// Edit this object to change the center profile without changing its JSX.
export const profile: Profile = {
  name: 'Sam Mayfield',
  year: 'Senior',
  major: 'Computer Science',
  minors: ['Cybersecurity', 'AI and Machine Learning', 'Mathematics'],
  hometown: 'Four Oaks, NC',
  interests: ['Rust', 'Cryptography', 'Selfhosting'],
};

// A fixed edition date keeps this a designed issue, rather than a live news feed.
export const edition = {
  date: 'Thursday, October 15, 2026',
  isoDate: '2026-10-15',
  number: '001',
};

// Original fictional sample copy: these stories are not real reporting.
export const cityArticles: NewsArticle[] = [
  {
    id: 'night-train',
    section: 'The city desk',
    headline: 'The quiet return of the night train',
    byline: 'From the transport desk',
    image: '/images/night-train.svg',
    imageAlt: 'A pixel illustration of a passenger train passing beneath a moonlit sky.',
    summary: 'At the old station, the lights are back on. A small town is rediscovering the pleasure of taking the slower way home.',
    paragraphs: [
      'LARKSPUR — At a quarter past ten, a conductor steps onto the platform and checks a watch. The station clock is a little fast. For the handful of passengers waiting beneath it, that hardly matters.',
      'In this imagined town, a restored evening service has given the station a second life. There are no grand promises on the timetable: just a few stops, a warm carriage, and another way to get home.',
    ],
  },
  {
    id: 'repair-cafe',
    section: 'Around the neighborhood',
    headline: 'An afternoon for fixing things',
    byline: 'From the community desk',
    summary: 'A borrowed table, a box of tools, and the conviction that a wobbly chair still has a few good years left.',
    paragraphs: [
      'The repair café begins with a kettle and a sign: bring something broken. By noon, the tables hold a lamp, two radios, and an umbrella that has seen better weather.',
      'The most useful thing exchanged is often a question. How does this come apart? Where does that wire go? Occasionally, the answer is another cup of tea and a second look.',
    ],
  },
];

export const scienceArticles: NewsArticle[] = [
  {
    id: 'dark-skies',
    section: 'Science & nature',
    headline: 'After dark, a different kind of city comes into view',
    byline: 'From the science desk',
    image: '/images/observatory.svg',
    imageAlt: 'A pixel illustration of an observatory and telescope beneath the stars.',
    summary: 'At a hilltop observatory, the evening begins when the streetlights disappear behind the trees.',
    paragraphs: [
      'On the observatory steps, visitors wait for their eyes to adjust. Someone points toward a constellation; someone else admits they have never been quite sure which stars to join.',
      'Inside, a volunteer turns the telescope by a fraction. The lesson is an unhurried one: the sky is easiest to notice when there is a little less light in the way.',
    ],
  },
  {
    id: 'seed-library',
    section: 'The natural world',
    headline: 'A library where the next chapter grows',
    byline: 'From the gardens desk',
    summary: 'Between the reference books and the reading room, a drawer of seed packets offers a different sort of story.',
    paragraphs: [
      'The lending rules are simple: take a packet, plant what you can, and bring back seeds if the season is kind. Each envelope carries a name and, sometimes, a note about the weather.',
      'The drawer is small, but the possibilities reach beyond it. A handful of beans can become a summer project, a shared meal, or something to pass across a garden fence.',
    ],
  },
];

export const cultureArticles: NewsArticle[] = [
  {
    id: 'paper-map',
    section: 'Culture & curiosities',
    headline: 'In praise of the paper map',
    byline: 'A note from the travel desk',
    summary: 'It will not recalculate. It will, however, show you the whole journey at once — including the places you had not thought to visit.',
    paragraphs: [
      'Fold a map across a kitchen table and a place becomes a set of possibilities. A road follows a river. A village sits just beyond the crease. The detour looks almost as interesting as the destination.',
      'A paper map asks for a different kind of attention. You must decide where you are, which direction to turn, and whether there is time for the long way round.',
    ],
  },
  {
    id: 'small-press',
    section: 'Arts & letters',
    headline: 'Small press, lasting impression',
    byline: 'From the arts desk',
    summary: 'In a narrow print shop, a drawer of old type is finding new work. Every letter leaves a little evidence of how it was made.',
    paragraphs: [
      'The printer lays out the letters one at a time. There is a rhythm to the work: choose, space, check, then check again. A headline is an arrangement before it is a sentence.',
      'When the first proof comes off the press, the ink is not perfectly even. That is part of the appeal. The page carries the small marks of attention that brought it into being.',
    ],
  },
];
