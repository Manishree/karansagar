
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  youtubeId: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
