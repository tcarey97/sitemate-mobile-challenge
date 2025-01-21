import { EverythingResponse } from '@/types';

export const fetchData = async (queryString: string) => {
  const baseUrl = process.env.EXPO_PUBLIC_API_URL;
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;

  if (!baseUrl || !apiKey) {
    throw new Error('API configuration is missing. Please check your environment variables.');
  }

  const params = new URLSearchParams({
    q: queryString,
  });

  const url = `${baseUrl}?${params}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      console.error(await response.json());
      throw new Error(`Response status: ${response.status}`);
    }

    const json: EverythingResponse = await response.json();
    const articles = json.articles;
    return articles;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
