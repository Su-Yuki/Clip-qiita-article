// ----[ import ]---------------------------------------------------------------
import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

/* type */
import { Article } from '../types/article';

// ---[ types ]-----------------------------------------------------------------
type Props = {
  article: Article;
  onPress: () => void;
};

// ---[ process ]---------------------------------------------------------------
const ListItem = ({article, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.topContainer}>
        <View style={styles.topItem}>
          <Image
            style={{borderRadius: 50, width: 32, height: 32}}
            source={{uri: article.user.profile_image_url}}
          />
          <View style={styles.leftTopItem}>
            <Text>{`@${article.user.id}`}</Text>
            <Text style={styles.post_date}>{article.created_at}</Text>
          </View>
        </View>
        <Text style={styles.middleItem} numberOfLines={2}>
          {article.title}
        </Text>
        <View style={styles.bottomItem}>
          <Entypo name="price-tag" size={14} color="gray" />
          {
            article.tags.map((tag, index) => {
              return (
                <Text style={styles.tags} key={index} numberOfLines={1}>
                  {` ${tag.name} `}
                </Text>)
            })
          }
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text>
          {`LGMT ${article.likes_count}`}
        </Text>
        <Feather name="paperclip" size={24} />
      </View>
    </TouchableOpacity>
  );
}
export default ListItem;

// ----[ style ]----------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    marginVertical:   8,
    marginHorizontal: 2,
    flex:             1,
    padding:          8,
    backgroundColor:  '#fff',
  },
  topContainer: {
    flex:             3
  },
  bottomContainer: {
    flexDirection:    'row',
    justifyContent:   'space-between',
    alignItems:       'flex-end',
    flex:             1
  },
  topItem: {
    flexDirection:    'row',
    marginBottom:     8,
    flex:             2,
  },
  post_date: {
    fontSize:         12,
  },
  leftTopItem: {
    marginLeft:       8,
  },
  middleItem: {
    marginBottom:     12,
    flex:             1,
    fontWeight:       "bold",
    fontSize:         16,
  },
  tags: {
    fontSize:         12,
    fontWeight:       "300",
  },
  bottomItem: {
    flexDirection:   'row',
    flex:            1
  },
});