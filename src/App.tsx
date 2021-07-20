import * as React from 'react';
import './App.scss';
import Form from './components/Form';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Form.Formik />
      <Form.HookForm />
    </Layout>
  );
}

export { App };
