import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Buttton';

describe('<Button /> tests', function () {
  test('It should match with the component snapshot', function () {
    const { asFragment } = render(<Button />);
    expect(asFragment).toMatchInlineSnapshot(`[Function]`);
  });

  test('It should call a provider event handler', function () {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Hello World</Button>);
    fireEvent.click(screen.getByText('Hello World'));
    expect(onClick).toHaveBeenCalled();
  });
});
