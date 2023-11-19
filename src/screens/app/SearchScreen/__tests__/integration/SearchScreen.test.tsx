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
  test('Test Search User: find, select, persist search history, and remove from history', async () => {
    // 1) Navigate to Search Screen - Render AppStack with Search Screen as the initial screen
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    // 2) Find the search text input and type "mar"
    const inputText = screen.getByPlaceholderText(/digite sua busca/i);
    fireEvent.changeText(inputText, 'mar');

    // NOTE: Exibir test falhando sem o fake timer
    // const debouncedSearch = useDebounce(search, 2000);
    act(() => jest.runAllTimers()); // skip text input debounce

    // 3) Find two users as per the MSW mock
    const user1 = await screen.findByText(userMocked.user1.username);
    expect(user1).toBeTruthy();

    const user2 = await screen.findByText(userMocked.user2.username);
    expect(user2).toBeTruthy();

    // 4) Select the user1 to navigate to their profile
    fireEvent.press(user1);

    // 5) Expect to be at the profile screen with the user 1 loaded
    const userName = await screen.findByText(userMocked.user1.full_name);
    expect(userName).toBeTruthy();

    // 6) Press the back button to navigate back to search
    const backButton = screen.getByTestId('screen-back-button');
    fireEvent.press(backButton);

    // 7) Clean the search text input
    fireEvent.changeText(inputText, '');
    act(() => jest.runAllTimers()); // skip text input debounce

    // 8) Make sure the search history screen appears by searching for "recent searches"
    const searchListTitle = screen.getByText(/buscas recentes/i);
    expect(searchListTitle).toBeTruthy();

    // 9) The user1 (pressed) was saved in the search history
    const user1Again = screen.queryByText(userMocked.user1.username);
    expect(user1Again).toBeTruthy();

    // 10) The user2 (NOT pressed) must NOT appear in the search history
    const user2Again = screen.queryByText(userMocked.user2.username);
    expect(user2Again).toBeFalsy();

    // 11) Remove user1 from the search history by pressing the trash icon
    const trashIcon = screen.getByTestId('trash');
    fireEvent.press(trashIcon);

    // 12) Make sure the user1 was removed from the search history
    const user1AfterRemoved = screen.queryByText(userMocked.user1.username);
    expect(user1AfterRemoved).toBeFalsy();
  });
});
