import React from 'react';

import {authCredentialsStorage} from '@services';
import {mockUtils, server, userMocked} from '@test';
import {act, fireEvent, renderScreen, screen} from 'test-utils';

import {AppStack} from '@routes';

jest.unmock('@react-navigation/native');
beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials);
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
  jest.useRealTimers();
});

describe('integration: SearchScreen', () => {
  test('search flow', async () => {
    // render pages (Search and Profile)
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    // type "mar"
    const inputText = screen.getByPlaceholderText(/digite sua busca/i);
    fireEvent.changeText(inputText, 'mar');

    act(() => jest.runAllTimers());

    // find users at search (mock at least two)
    const userElement = await screen.findByText(userMocked.user1.username);

    // press the first to navigate
    fireEvent.press(userElement);

    // expect be at the user profile screen from the right user
    const userName = await screen.findByText(userMocked.user1.full_name);
    // screen.debug();
    expect(userName).toBeTruthy();
    // back to search screen (press go back button )
    // clean form
    // find "buscas recentes"
    // find user pressed
    // remove user pressing trash icon
    // wait for element (user card to be removed)
  });
});
