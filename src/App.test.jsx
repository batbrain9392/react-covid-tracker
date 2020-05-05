import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

function setup() {
  const utils = render(<App />)

  return {
    ...utils,
  }
}

test('renders the app with img and dropdown', () => {
  const { getByRole } = setup()

  expect(getByRole('img')).toBeInTheDocument()
  expect(getByRole('combobox')).toBeInTheDocument()
})
