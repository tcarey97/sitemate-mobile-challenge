import React from 'react';
import { Stack } from 'expo-router';

const NewsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="news" options={{ title: 'The News' }} />
      <Stack.Screen name="news-article" options={{ title: 'News Article' }} />
    </Stack>
  );
};

export default NewsLayout;
