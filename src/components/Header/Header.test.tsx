import * as React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

describe('<Header /> tests', function () {
  test('It should match with the component snapshot', function () {
    const { asFragment } = render(<Header />);
    expect(asFragment).toMatchInlineSnapshot(`[Function]`);
  });
});
