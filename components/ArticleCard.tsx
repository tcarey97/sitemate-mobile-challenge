import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Article } from '@/types';
import { router } from 'expo-router';

const ArticleCard = ({ item }: { item: Article }) => {
  return (
    <Pressable
      onPress={() =>
        router.navigate({
          pathname: '/(news)/news-article',
          params: { item: JSON.stringify(item) },
        })
      }
      style={styles.card}
    >
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.date}>
          Published: {new Date(item.publishedAt).toLocaleDateString()}
        </Text>
      </View>
    </Pressable>
  );
};

export default ArticleCard;

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 12,
  },
  content: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#999',
    textAlign: 'left',
  },
});
