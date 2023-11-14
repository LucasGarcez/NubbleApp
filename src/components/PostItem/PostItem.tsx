import React from 'react';

import {Post} from '@domain';

import {Box, ProfileUser} from '@components';

import {PostActions} from './components/PostActions';
import {PostBottom} from './components/PostBottom';
import {PostImage} from './components/PostImage';

interface Props {
  post: Post;
}
export function PostItem({post}: Props) {
  return (
    <Box paddingHorizontal="s24" marginBottom="s24">
      <ProfileUser
        id={post.author.id}
        profileUrl={post.author.profileURL}
        username={post.author.userName}
      />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
      <PostBottom
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
        id={post.id}
      />
    </Box>
  );
}
