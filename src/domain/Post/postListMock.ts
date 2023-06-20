import {Post} from './types';

export const postListMock: Post[] = [
  {
    id: 'post_1',
    text: 'This is my first post!',
    author: {
      profileURL:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    reactionCount: 10,
    commentCount: 5,
    favoriteCount: 2,
  },
  {
    id: 'post_2',
    text: 'Check out this cool photo!',
    author: {
      profileURL:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Jane Smith',
      userName: 'janesmith',
    },
    imageURL:
      'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    reactionCount: 15,
    commentCount: 8,
    favoriteCount: 3,
  },
  {
    id: 'post_3',
    text: "Just finished reading this book and it's amazing!",
    author: {
      profileURL:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Mark Johnson',
      userName: 'markjohnson',
    },
    imageURL:
      'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    reactionCount: 20,
    commentCount: 12,
    favoriteCount: 5,
  },
  {
    id: 'post_4',
    text: "I can't believe it's already May!",
    author: {
      profileURL:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Amy Lee',
      userName: 'amylee',
    },
    imageURL:
      'https://images.unsplash.com/photo-1556764900-61987c92731d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    reactionCount: 5,
    commentCount: 3,
    favoriteCount: 1,
  },
  {
    id: 'post_5',
    text: 'Coding day!',
    author: {
      profileURL:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
      name: 'Santiago Emilio',
      userName: 'sanemilio',
    },
    imageURL:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    reactionCount: 0,
    commentCount: 0,
    favoriteCount: 0,
  },
  {
    id: 'post_6',
    text: "What's your favorite color?",
    author: {
      profileURL:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL:
      'https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    reactionCount: 2,
    commentCount: 1,
    favoriteCount: 0,
  },
  {
    id: 'post_7',
    text: "I'm so excited for the weekend!",
    author: {
      profileURL:
        'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
      name: 'Jane Smith',
      userName: 'janesmith',
    },
    imageURL:
      'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    reactionCount: 8,
    commentCount: 4,
    favoriteCount: 1,
  },
  {
    id: 'post_8',
    text: 'Just got back from vacation and it was amazing!',
    author: {
      profileURL:
        'https://images.unsplash.com/photo-1544435253-f0ead49638fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Mark Johnson',
      userName: 'markjohnson',
    },
    imageURL:
      'https://plus.unsplash.com/premium_photo-1681266166596-f4c1c78375a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    reactionCount: 25,
    commentCount: 10,
    favoriteCount: 4,
  },
  {
    id: 'post_9',
    text: "I'm loving this new restaurant!",
    imageURL:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    author: {
      profileURL:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'Amy Lee',
      userName: 'amylee',
    },
    reactionCount: 35,
    commentCount: 0,
    favoriteCount: 0,
  },
];
