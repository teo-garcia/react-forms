import './Layout.scss';
import * as React from 'react';
import { LayoutProps } from '../../utils/types';
import { Header } from '../Header/Header';

function Layout(props: LayoutProps) {
  const { children, ...rest } = props;
  return (
    <>
      <main {...rest}>
        <Header />
        {children}
      </main>
    </>
  );
}

export { Layout };
