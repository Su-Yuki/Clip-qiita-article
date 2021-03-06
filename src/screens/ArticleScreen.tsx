// ----[ import ]---------------------------------------------------------------
import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {WebView} from 'react-native-webview';

// ---[ process ]---------------------------------------------------------------
export default ArticleScreen = ({route}) => {
  const {article} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
  );
};

// ----[ style ]----------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
