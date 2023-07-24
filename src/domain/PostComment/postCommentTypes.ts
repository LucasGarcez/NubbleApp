export interface PostComment {
  id: number; // 117;
  message: string;
  createdAt: string; // '2023-07-24T20:38:56.192+10:00';
  author: {
    id: number; // 6;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; // 117;
  message: string; // 'Pariatur cupiditate neque fugit pariatur ipsa.';
  user_id: number; // 6;
  post_id: number; // 1;
  created_at: string; // '2023-07-24T20:38:56.192+10:00';
  updated_at: string; // '2023-07-24T20:38:56.192+10:00';
  user: {
    id: number; // 6;
    first_name: string; // 'Samuel';
    last_name: string; // 'Vilar';
    username: string; //  'samuelvilar';
    email: string; //'samu.vilar@coffstack.com';
    profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/5-samuel.png';
    is_online: boolean; //false;
    full_name: string; //'Samuel Vilar';
  };
  meta: any; //{};
}
