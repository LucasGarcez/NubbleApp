import React from 'react';
import {Alert, AlertButton} from 'react-native';

import {authCredentialsStorage} from '@services';
import {server, mockedPostComment, resetInMemoryResponse} from '@test';
import {
  act,
  fireEvent,
  renderScreen,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterEach(() => {
  server.resetHandlers();
  resetInMemoryResponse();
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
  jest.useRealTimers();
});

describe('integration: PostCommentScreen', () => {
  test('When ADDING a comment, the list is automatically updated', async () => {
    console.time('Rendering screen');
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

    console.timeEnd('Rendering screen');

    console.time('findByText:comentario');
    const comment = await screen.findByText(/comentário aleatório/i);
    console.timeEnd('findByText:comentario');

    expect(comment).toBeTruthy();

    // achar o campo de input
    console.time('Finding input text');
    const inputText = screen.getByPlaceholderText(/Adicione um comentário/i);
    console.timeEnd('Finding input text');

    // digitar a mensagem
    console.time('Changing text');
    fireEvent.changeText(inputText, 'novo comentário');
    console.timeEnd('Changing text');

    // clicar em enviar
    console.time('Pressing send');
    fireEvent.press(screen.getByText(/enviar/i));
    console.timeEnd('Pressing send');

    //espera: a lista atualizada com o novo comentário
    console.time('Finding new comment');
    const newComment = await screen.findByText(/novo comentário/i);
    console.timeEnd('Finding new comment');
    expect(newComment).toBeTruthy();

    console.time('Finding all comments');
    const comments = await screen.findAllByTestId('post-comment-id');
    console.timeEnd('Finding all comments');

    expect(comments.length).toBe(3);
  }, 10000);

  test.skip('When DELETING a comment, the list is automatically updated and a toast message is displayed ', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedPostComment.mateusAuthCredentials);

    let mockedConfirm: AlertButton['onPress'];
    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((title, message, buttons) => {
        if (buttons && buttons[0]) {
          mockedConfirm = buttons[0].onPress;
        }
      });

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
    const comment = await screen.findByText(
      mockedPostComment.mateusPostCommentAPI.message,
      {exact: false},
    );

    expect(comment).toBeTruthy();

    // long press no comentário
    fireEvent(comment, 'longPress');

    expect(mockedAlert).toHaveBeenCalled();

    // pressionar em "confirmar" no alert
    mockedConfirm && mockedConfirm();

    // verificar se a list foi atualizada (meu comentário sumiu)
    await waitForElementToBeRemoved(() =>
      screen.getByText(mockedPostComment.mateusPostCommentAPI.message, {
        exact: false,
      }),
    );

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(1);

    // verificar se foi exibida a toast message

    await waitFor(() =>
      expect(screen.getByTestId('toast-message')).toBeTruthy(),
    );

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast-message')).toBeNull();
  });
});
