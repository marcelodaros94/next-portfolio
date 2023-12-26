export type Job = {
  company: string;
  description: string;
  image: string;
}

export type ContentPerLanguage = {
  title: string;
  description: string;
  jobs: Job[];
}

export type Content = {
  en: ContentPerLanguage;
  es: ContentPerLanguage;
};
  