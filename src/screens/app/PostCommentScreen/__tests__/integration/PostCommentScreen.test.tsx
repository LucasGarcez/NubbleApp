import React from 'react';
import {Alert} from 'react-native';

import {authCredentialsStorage} from '@services';
import {
  act,
  fireEvent,
  renderScreen,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

import {mockedData} from './mockedServer/mocks';
import {server, resetResponses} from './mockedServer/server';

beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests, so they don't affect other tests.
afterEach(() => {
  resetResponses();
  server.resetHandlers();
});
// Clean up after the tests are finished.
afterAll(() => server.close());

jest.useFakeTimers();

describe('integration:PostCommentScreen', () => {
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockedData.mateusAuthCredentials);
  test('When ADDING a comment the list is automatically updated', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'key-screen',
          params: {
            postAuthorId: 1,
            postId: 1,
          },
        }}
      />,
    );

    // wait for the list loaded
    const element = await screen.findAllByTestId('post-comment-item');
    expect(element.length).toBe(3);

    // add a new comment
    const textMessageElement = screen.getByPlaceholderText(
      /Adicione um comentário/i,
    );
    fireEvent.changeText(textMessageElement, 'this is a new comment');
    fireEvent.press(screen.getByText(/enviar/i));

    // wait for the new comment to appear on the screen
    await screen.findByText(/this is a new comment/i);
    const element2 = await screen.findAllByTestId('post-comment-item');
    expect(element2.length).toBe(4);
  });

  test('When DELETING a comment the list is automatically updated', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'key-screen',
          params: {
            postAuthorId: mockedData.mateusAuthCredentials.user.id,
            postId: mockedData.POST_ID,
          },
        }}
      />,
    );

    // mocked alert
    let confirmFn: ((value?: string | undefined) => void) | undefined;
    const spyAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((title, message, callbackOrButtons) => {
        if (callbackOrButtons && callbackOrButtons[0]) {
          confirmFn = callbackOrButtons[0].onPress;
        }
      });

    // wait for the comment list to load
    const commentList = await screen.findAllByTestId('post-comment-item');
    expect(commentList.length).toBe(3);

    const mateusComment = screen.getByText(
      mockedData.mateusPostCommentAPI.message,
      {exact: false},
    );

    fireEvent(mateusComment, 'longPress');
    expect(spyAlert).toHaveBeenCalled();

    if (confirmFn) {
      confirmFn();
    }

    await waitForElementToBeRemoved(() =>
      screen.queryByText(mockedData.mateusPostCommentAPI.message, {
        exact: false,
      }),
    );

    // TODO: test => jest.advanceTimersByTime(1000);

    await waitFor(() =>
      expect(screen.getByTestId('toast-component')).toBeTruthy(),
    );

    // NOTE: explicar como o runAllTimers funciona e a diferença para o advanceTimersByTime
    // Por que o runAllTimers funciona mas o advanceTimersByTime não?
    // TODO:
    // - Olhar implementação do Animated.timing (Toast Component)
    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast-component')).toBeNull();
  });
});
