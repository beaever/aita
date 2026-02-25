export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Category;
  year: number;
  date: string;
  region: Region;
  environment: Environment[];
  imageUrl: string;
  videoUrl?: string;
  featured?: boolean;
}

export type Category = 'music' | 'museums-exhibitions' | 'shows-events';

export type Region = 'europe' | 'asia' | 'middle-east-africa' | 'americas';

export type Environment = 
  | 'show-production'
  | 'stage-design'
  | 'media-facades'
  | 'special-projects'
  | 'public-events'
  | 'installations';

export interface FilterOptions {
  categories: Category[];
  years: number[];
  regions: Region[];
  environments: Environment[];
  searchQuery: string;
}
