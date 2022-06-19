// ----[ import ]---------------------------------------------------------------
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, FlatList, SafeAreaView, RefreshControl } from 'react-native';

import axios from 'axios';

/* components */ 
import ListItem from '../components/ListItem'
/* type */
import { Article } from '../types/article';

// ---[ process ]---------------------------------------------------------------
const limit = 3;
const page  = 1;
const url   = `https://qiita.com/api/v2/items?per_page=${limit}`;

export default HomeScreen = ({navigation}) => {
  const [articles, setArticles] = useState([]);
  const pageRef = useRef(1);
  const [refreshing, setRefreshing] = useState(false);
  const fetchedAllRef = useRef(false);

  useEffect(() => { 
    fetchArticles(1);
  }, []);

  const onEndReached = () => {
    if(!fetchedAllRef.current){
      pageRef.current = pageRef.current + 1
      fetchArticles(pageRef.current);
    }
  };

  const onRefresh = async() => {
    setArticles([]);
    pageRef.current = 1;
    fetchedAllRef.current = false;
    await fetchArticles(1);
  };

  const fetchArticles = async (page: number) => {
    try {
      const response = await axios
        .get(`${url}&page=${page}`, {
          headers: {
            Authorization: "Bearer 527a0d3696e695fc32b466684e7347ba0fc01de8",
            "content-type": "application/json",
            "charset":      "utf-8" 
          }
        });
        setArticles(prevArticles => [
          ...prevArticles,
          ...response.data,
        ]);
    } catch (error) {
      // console.error(error);
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
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={onEndReached}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
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