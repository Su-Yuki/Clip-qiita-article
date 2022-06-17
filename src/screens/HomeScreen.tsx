// ----[ import ]---------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';

import axios from 'axios';

/* components */ 
import ListItem from '../components/ListItem'
/* type */
import { Article } from '../types/article';

// ---[ process ]---------------------------------------------------------------
const limit = 10;
const page  = 1;
const url   = `https://qiita.com/api/v2/items?page=${page}&per_page=${limit}`;

export default HomeScreen = ({navigation}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => { 
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios
        .get(url, {
          headers: {
            // Authorization: "Bearer hoge",
            "content-type": "application/json",
            "charset":      "utf-8" 
          }
        });
      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // ---[ return ]-------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={articles}
        renderItem={({item, index}) => (
          <ListItem 
            article={item}
            onPress={() => navigation.navigate('Article', {article: item})}
            key={index.toString()} 
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

// ----[ style ]----------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex:            1,
    backgroundColor: '#f5f6f6',
  },
});