import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';

import axios from 'axios';
import ListItem from './src/components/ListItem'

const limit = 20;
const page  = 1;
const url   = `https://qiita.com/api/v2/items?page=${page}&per_page=${limit}`;

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => { 
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios
        .get(url, {
          headers: {
            "content-type": "application/json",
            "charset":      "utf-8" 
          }
        });
      setArticles(response.data);
      // console.log(articles);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={articles}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            id={item.user.id}
            profile_image_url={item.user.profile_image_url}
            likes_count={item.likes_count}
            created_at={item.created_at}
          />
        )}
        // keyExtractor={}
      />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
