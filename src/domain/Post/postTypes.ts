export interface Post {
  id: string;
  text: string;
  author: {
    profileURL: string;
    name: string;
    userName: string;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
}

export interface PostAPI {
  id: number; //1;
  text: string; //'Bom dia!';
  user_id: number; // 1;
  image_url: string; //  'https://imgur.com/Ms5ULHg.jpg';
  is_fixed: boolean; // false;
  is_activated: boolean; // true;
  created_at: boolean; // '2023-07-09T02:21:39.680+10:00';
  updated_at: boolean; // '2023-07-09T02:21:39.689+10:00';
  user: {
    id: number; // 1;
    first_name: string; //'Maria';
    last_name: string; //'Julia';
    username: string; // 'mariajulia';
    email: string; //'mariajulia@coffstack.com';
    profile_url: string; // 'https://imgur.com/72QJ7vu.jpg';
    is_online: false;
    full_name: string; //'Maria Julia';
  };
  status: string; //'published';
  meta: {
    like_count: string; //'13';
    favorite_count: string; //'1';
    comments_count: string; // '5';
  };
}
