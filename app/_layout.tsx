import { Tabs } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="(news)" options={{ title: 'News' }} />
      </Tabs>
    </QueryClientProvider>
  );
}
