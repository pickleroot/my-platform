// These types describe the shape of our content; they do not create any HTML.
export type Profile = {
  name: string;
  year: string;
  major: string;
  minors: string[];
  hometown: string;
  interests: string[];
};

export type NewsArticle = {
  id: string;
  section: string;
  headline: string;
  byline: string;
  summary: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
};
