import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RootState } from '../redux/store';
import CommentCard from '../components/CommentCard';
import { fetchComments } from '../redux/slices/postsSlice';
import { Post } from '../types';

type PostDetailsRouteProp = RouteProp<{ params: { postId: number, post: Post } }, 'params'>;

const PostDetailsScreen = () => {
  const route = useRoute<PostDetailsRouteProp>();
  const { post } = route.params;
  const dispatch = useDispatch();
  const { comments, loading } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    if (post?.id) {
      dispatch(fetchComments(post.id));
    }
  }, [dispatch, post.id]);


  if (!post) {
    console.log('PostDetailsScreen - post is null');
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.title}>{post.title}</Text>
        <Text>{post.body}</Text>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CommentCard comment={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  postContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostDetailsScreen;
