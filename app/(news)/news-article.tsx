import { Alert, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Article } from '@/types';

const NewsArticle = () => {
  const params = useLocalSearchParams<{ item: string }>();
  const article: Article = JSON.parse(params.item);

  const openUrl = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.source}>Source: {article.source.name}</Text>
        <Text style={styles.description}>{article.description}</Text>
        <Text style={styles.author}>By: {article.author || 'Unknown'}</Text>
        <Text style={styles.date}>
          Published: {new Date(article.publishedAt).toLocaleDateString()}
        </Text>
        <Pressable onPress={() => openUrl(article.url)} style={styles.button}>
          <Text style={styles.buttonText}>Read Full Article</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NewsArticle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  content: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  source: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginBottom: 12,
  },
  author: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
