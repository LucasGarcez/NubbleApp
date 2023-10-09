import React from 'react';

import {render} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  it('the component rendered', () => {
    render(<Button title="button title" />);
  });
  it('should shows loading indicator', () => {
    render(<Button title="button title" />);
  });
});
