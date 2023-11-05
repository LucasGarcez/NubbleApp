import React from 'react';

import {authCredentialsStorage} from '@services';
import {server, mockedPostComment} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('integration: PostCommentScreen', () => {
  test('When ADDING a comment, the list is automatically updated', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );

    const comment = await screen.findByText(/comentário aleatório/i);

    expect(comment).toBeTruthy();

    // achar o campo de input
    const inputText = screen.getByPlaceholderText(/Adicione um comentário/i);

    // digitar a mensagem
    fireEvent.changeText(inputText, 'novo comentário');

    // clicar em enviar
    fireEvent.press(screen.getByText(/enviar/i));

    //espera: a lista atualizada com o novo comentário
    const newComment = await screen.findByText(/novo comentário/i);
    expect(newComment).toBeTruthy();

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(2);
  });

  test('When DELETING a comment, the list is automatically updated and a toast message is displayed ', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedPostComment.mateusAuthCredentials);

    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );

    // esperar a lista carregar

    // identificar o comentário que será deletado

    // long press no comentário

    // pressionar em "confirmar" no alert

    // verificar se a list foi atualizada (meu comentário sumiu)

    // verificar se foi exibida a toast message
  });
});
