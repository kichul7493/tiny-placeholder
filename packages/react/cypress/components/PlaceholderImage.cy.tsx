import React from 'react'
import { PlaceholderImage } from '../../src/components/PlaceholderImage'

describe('<PlaceholderImage />', () => {
  it('renders', () => {
    cy.mount(<PlaceholderImage />)

    cy.get('img').should('have.attr', 'alt', 'Placeholder')
  })

  it('renders with custom width and height', () => {
    const alt = 'test'
    const width = 100
    const height = 100

    cy.mount(
      <PlaceholderImage
        alt={alt}
        options={{
          width,
          height,
        }}
      />,
    )

    cy.get('img').should('have.attr', 'alt', alt)
    cy.get('img').should('have.attr', 'width', String(width))
    cy.get('img').should('have.attr', 'height', String(height))
  })
})
