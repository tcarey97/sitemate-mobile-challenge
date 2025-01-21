import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../../api/fetchNews';
import { Article } from '@/types';
import { useDebouncedCallback } from 'use-debounce';
import ArticleCard from '@/components/ArticleCard';

const News = () => {
  const [text, setText] = useState<string>();
  const [debouncedText, setDebouncedText] = useState<string>('Sitemate');

  const handleDebouncedText = useDebouncedCallback((value) => {
    setDebouncedText(value);
  }, 500);

  const handleChangeText = (searchText: string) => {
    const trimmedText = searchText.trim();
    setText(trimmedText);
    handleDebouncedText(trimmedText);
  };

  const { isPending, error, data } = useQuery({
    queryKey: ['newsData', debouncedText],
    queryFn: () => fetchData(debouncedText),
    enabled: !!debouncedText,
  });

  const renderItem = ({ item }: { item: Article }) => {
    return <ArticleCard item={item} />;
  };

  const renderList = () => {
    if (!debouncedText) {
      return <Text style={styles.noResults}>Please enter a search term to begin.</Text>;
    }
    if (isPending) {
      return <Text style={styles.loading}>Loading...</Text>;
    }
    if (error) {
      return <Text style={styles.noResults}>Something went wrong. Please try again later.</Text>;
    }
    if (data?.length === 0) {
      return <Text style={styles.noResults}>No results found for "{debouncedText}".</Text>;
    }
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.title}-${index}`}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        value={text}
        placeholder="Search for news (e.g., 'Sitemate')"
      />
      {renderList()}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    color: '#333',
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#333',
  },

  loading: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 16,
    color: '#333',
  },
  noResults: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 16,
    color: '#666',
  },
});
