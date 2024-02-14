import {MutationOptions, QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postService} from '../postService';
import {Post, PostImage} from '../postTypes';

export function usePostCreate(options?: MutationOptions<Post>) {
  const queryClient = useQueryClient();

  const {mutate, isLoading, isError} = useMutation<
    Post,
    unknown,
    {text: string; postImage: PostImage}
  >({
    mutationFn: ({text, postImage}) => postService.createPost(text, postImage),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostList],
      });
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || 'ocorreu um erro');
      }
    },
  });

  return {
    createPost: mutate,
    isLoading,
    isError,
  };
}
