import {MutationOptions, QueryKeys} from '@infra';
import {ImageForUpload, multimediaService} from '@services';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostCreate(options?: MutationOptions<Post>) {
  const queryClient = useQueryClient();

  const {mutate, isLoading, isError} = useMutation<
    Post,
    unknown,
    {text: string; image: ImageForUpload}
  >({
    mutationFn: ({text, image}) => postService.createPost(text, image),
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

  async function createPost({
    description,
    imageUri,
  }: {
    description: string;
    imageUri: string;
  }) {
    const image = await multimediaService.prepareImageForUpload(imageUri);
    mutate({text: description, image});
  }

  return {
    createPost,
    isLoading,
    isError,
  };
}
