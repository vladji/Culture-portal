import React from 'react';
import { Button } from 'react-bootstrap';
import '../src/styles/bootstrap.min.css';

export default {
  title: 'Button',
};

export const primary = () => {
  return (
    <Button variant="primary" className="btn btn-primary">
      Primary
    </Button>
  )
}

export const secondary = () => {
  return (
    <Button variant="secondary" className="btn btn-secondary">
      Secondary
    </Button>
  )
}

export const success = () => {
  return (
    <Button variant="success" className="btn btn-success">
      Success
    </Button>
  )
}

export const outlinePrimary = () => {
  return (
    <Button variant="outline-primary" className="btn btn-outline-primary">
      Primary
    </Button>
  )
}

export const outlineSecondary = () => {
  return (
    <Button variant="outline-secondary" className="btn btn-outline-secondary">
      Secondary
    </Button>
  )
}

export const outlineSuccess = () => {
  return (
    <Button variant="outline-success" className="btn btn-outline-success">
      Success
    </Button>
  )
}

export const disabledPrimary = () => {
  return (
    <Button variant="primary" disabled className="btn btn-outline-primary disabled">
      Primary
    </Button>
  )
}

export const disabledSuccess = () => {
  return (
    <Button variant="success" disabled className="btn btn-outline-success disabled">
      Success
    </Button>
  )
}

export const large = () => {
  return (
    <Button variant="primary" size="lg" class="btn btn-primary btn-lg">
      Large button
    </Button>
  )
}

export const small = () => {
  return (
    <Button variant="primary" size="sm" class="btn btn-primary btn-sm">
      Small button
    </Button>
  )
}
