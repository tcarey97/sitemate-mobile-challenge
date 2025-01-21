export interface EverythingResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: {
    id: string | null; // Assuming `id` can be null if not provided
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string; // ISO 8601 date string
  content: string;
}
