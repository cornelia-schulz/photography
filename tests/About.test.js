import { render, getByText } from '@testing-library/react'
import About from '../client/components/About'

test('component renders', () => {
  const { container, getByText } = render(<About />)

  expect(container.firstChild).toMatchInlineSnapShot
})