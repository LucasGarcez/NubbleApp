import {useState} from 'react';

import {PostComment} from '@domain';

import {postCommentService} from '../postCommentService';

interface Options {
  onSuccess?: (data: PostComment) => void;
  onError?: (message: string) => void;
}
export function usePostCommentCreate(postId: number, options?: Options) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setLoading(true);
      setError(null);
      const postComment = await postCommentService.create(postId, message);
      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
    } catch (error) {
      if (options?.onError) {
        options.onError('Erro ao criar comentário');
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    createComment,
    loading,
    error,
  };
}
