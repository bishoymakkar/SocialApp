import React from 'react';
import styled from 'styled-components/native'; // Import from styled-components/native for React Native
import { Comment } from '../types';

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <Card>
      <Header>
        <Avatar source={{ uri: 'https://via.placeholder.com/50' }} />
        <UserName>{comment.name}</UserName>
      </Header>
      <Content>{comment.body}</Content>
    </Card>
  );
};

const Card = styled.View`
  padding: 10px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 5px;
  elevation: 2;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Content = styled.Text`
  font-size: 14px;
`;

export default CommentCard;
