import React from 'react';

import {authCredentialsStorage} from '@services';
import {mockUtils} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {AppStack} from '@routes';

beforeAll(() => {
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials);
});

describe('integration: SearchScreen', () => {
  test('Search Flow', () => {
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    const inputText = screen.getByPlaceholderText(/digite sua busca/i);
    expect(inputText).toBeTruthy();
    fireEvent.changeText(inputText, 'mar');
  });
});
