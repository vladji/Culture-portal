import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from 'react-bootstrap'

export default {
  component: Button,
  title: 'Button',
  decorators: [story => <div style={{ padding: '3%' }}>{story()}</div>],
}

export const Primary = () => {
  return (
    <Button variant="primary" className="btn btn-primary">
      Primary
    </Button>
  )
}
