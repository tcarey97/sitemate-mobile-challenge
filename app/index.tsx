import { router } from 'expo-router';
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Index = () => {
  const insets = useSafeAreaInsets();

  const handleNavigateToNews = () => {
    router.navigate({
      pathname: '/(news)/news',
    });
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <Text style={styles.title}>
        Welcome to the
        <Text style={styles.titleAccent}> Sitemate </Text>
        news app
      </Text>
      <Text style={styles.subtitle}>Click the button below to explore the latest news.</Text>
      <Pressable
        onPress={handleNavigateToNews}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonText}>Go to News</Text>
      </Pressable>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#f7f8fa',
  },
  title: {
    fontSize: 22, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
    paddingHorizontal: 16, 
    lineHeight: 30, 
  },
  titleAccent: {
    color: '#007AFF', 
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonPressed: {
    backgroundColor: '#005BB5',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
