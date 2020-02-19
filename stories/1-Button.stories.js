import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'react-bootstrap';
import '../src/styles/bootstrap.min.css';

export default {
  title: 'Button',
};

export const WithText = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const primary = () => (
  		<Button variant="primary" className="btn btn-primary">Primary</Button>
);
 