import React from 'react';
import {Alert} from 'react-native';

import {authCredentialsStorage} from '@services';
//@ts-ignore
// import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import {
  fireEvent,
  renderScreen,
  screen,
  waitForElementToBeRemoved,
} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

import {mockedData} from './mockedServer/mocks';
import {server, resetResponses} from './mockedServer/server';

const MOCK_INITIAL_METRICS = {
  frame: {
    width: 320,
    height: 640,
    x: 0,
    y: 0,
  },
  insets: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
};
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => {
    return MOCK_INITIAL_METRICS.insets;
  },
}));

beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests, so they don't affect other tests.
afterEach(() => {
  resetResponses();
  server.resetHandlers();
});
// Clean up after the tests are finished.
afterAll(() => server.close());

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

    let confirmFn: ((value?: string | undefined) => void) | undefined;
    const spyAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((title, message, callbackOrButtons) => {
        if (callbackOrButtons && callbackOrButtons[0]) {
          confirmFn = callbackOrButtons[0].onPress;
        }
      });

    if (confirmFn) {
      confirmFn();
    }

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

    // await waitFor(() =>
    //   expect(screen.getByTestId('toast-component')).toBeTruthy(),
    // );

    // await waitForElementToBeRemoved(
    //   () => screen.getByTestId('toast-component'),
    //   {timeout: 6000},
    // );
  });
  // }, 15000);
});
