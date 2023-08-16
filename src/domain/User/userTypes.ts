export interface User {
  id: number; // 1;
  firstName: string; // 'Maria';
  lastName: string; // 'Julia';
  username: string; //'mariajulia';
  email: string; //'mariajulia@coffstack.com';
  profileUrl: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png';
  isOnline: boolean; // false;
  fullName: string; // 'Maria Julia';
}

export interface UserAPI {
  id: number; // 1;
  first_name: string; // 'Maria';
  last_name: string; // 'Julia';
  username: string; //'mariajulia';
  email: string; //'mariajulia@coffstack.com';
  profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png';
  is_online: boolean; // false;
  full_name: string; // 'Maria Julia';
}
