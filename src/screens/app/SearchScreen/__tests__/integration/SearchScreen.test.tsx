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

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  jest.useRealTimers();
  jest.resetAllMocks();
});

describe('integration: SearchScreen', () => {
  test('Search Flow', async () => {
    // 1) Navigate to Search Screen
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    // 2) Find the search input and type user name
    const inputText = screen.getByPlaceholderText(/digite sua busca/i);
    fireEvent.changeText(inputText, 'mar');
    act(() => jest.runAllTimers());

    // 3) Find two users as per the MSW mock
    const user1 = await screen.findByText(userMocked.user1.username);
    expect(user1).toBeTruthy();

    const user2 = await screen.findByText(userMocked.user2.username);
    expect(user2).toBeTruthy();

    // 4) Select the user1 and navigate to Profile Screen
    fireEvent.press(user1);

    // 5) Expect to be at the Profile Screen with the user1 loaded
    const userFullName = await screen.findByText(userMocked.user1.full_name);
    expect(userFullName).toBeTruthy();

    // 6) Press the back button to navigate back to Search Screen

    // 7) Clean the search input

    // 8) Make sure the search history (buscas recentes) section appears

    // 9) The user1 (pressed) was the saved in the search history

    // 10) The user2 (NOT pressed) must NOT appear in the search history

    // 11) Remove user1 from the search history by pressing the trash icon

    // 12) Make sure the user1 was removed from the search history
  });
});
