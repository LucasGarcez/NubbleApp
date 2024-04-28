import {Post, PostAPI} from '../Post';
import {User, UserAPI} from '../User';

export type PostReactionType = 'favorite' | 'like';

export interface PostReactionBase {
  id: number;
  emojiType: PostReactionType;
  userId: number;
  postId: number;
  isChecked: boolean;
  createdAt: string; //'2024-04-15T21:12:15.991+00:00';
  updatedAt: string; // '2024-04-15T21:12:15.991+00:00';
}
export interface PostReaction extends PostReactionBase {
  author: User;
  post: Pick<Post, 'id' | 'text' | 'imageURL'>;
}

export interface PostReactionBaseAPI {
  id: number;
  emoji_type: PostReactionType;
  user_id: number;
  post_id: number;
  is_checked: true;
  created_at: string; //'2024-04-15T21:12:15.991+00:00';
  updated_at: string; // '2024-04-15T21:12:15.991+00:00';
}

export interface PostReactionAPI extends PostReactionBaseAPI {
  user: UserAPI;
  post: Pick<PostAPI, 'id' | 'text' | 'image_url' | 'status'>;
}
