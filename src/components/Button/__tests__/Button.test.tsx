import React from 'react';

import {render} from '@testing-library/react-native';

import {Button} from '../Button';

describe('<Button />', () => {
  test('the component rendered', () => {
    render(<Button title="button title" />);
  });
});
