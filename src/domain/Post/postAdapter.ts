import {Post, PostAPI} from './postTypes';

function toPost(postApi: PostAPI): Post {
  return {
    id: postApi.id.toString(),
    text: postApi.text,
    author: {
      profileURL: postApi.user.profile_url,
      name: postApi.user.full_name,
      userName: postApi.user.username,
    },
    imageURL: postApi.image_url,
    reactionCount: parseInt(postApi.meta.like_count),
    commentCount: parseInt(postApi.meta.comments_count),
    favoriteCount: parseInt(postApi.meta.favorite_count),
  };
}

export const postAdapter = {
  toPost,
};
