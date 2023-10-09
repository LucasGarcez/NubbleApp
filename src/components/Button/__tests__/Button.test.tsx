import React from 'react';

import {render, fireEvent} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  it('calls the onPress function when is pressed', () => {
    const mockedOnPress = jest.fn();

    const {getByText} = render(
      <Button title="Button Title" onPress={mockedOnPress} />,
    );

    const titleElement = getByText(/button title/i);

    fireEvent.press(titleElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });
});
