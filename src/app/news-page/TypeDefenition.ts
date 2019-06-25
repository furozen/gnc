export enum ENewsSection {
  main = 'main',
  common = 'common'
}

export interface INewsItems {
  icon: string;
  section: string | ENewsSection;
  title: string;
  resourse: {
    path?: string,
    route: string,
    newsApi?: {
      query?: { [lang: string]: string },
      date: string,
    }
  };
}
