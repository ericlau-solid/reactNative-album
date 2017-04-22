import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = ({ album }) => {
  console.log('wt');
  return (
    <View>
      <Text>{album.title}</Text>
    </View>
  );
};

export default AlbumDetail;
