import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

describe('<Header /> tests', function () {
  test('It should match with the component snapshot', function () {
    const { asFragment } = render(<Layout>Hello World</Layout>);
    expect(asFragment).toMatchInlineSnapshot(`[Function]`);
  });

  test('It should render provided elements', function () {
    render(
      <Layout>
        <h1>Lorem Ipsum</h1>
      </Layout>
    );
    expect(screen.getByText(/Lorem Ipsum/)).toBeInTheDocument();
  });
});
