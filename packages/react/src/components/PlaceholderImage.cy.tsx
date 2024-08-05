import { PlaceholderImage } from './PlaceholderImage'

describe('<PlaceholderImage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    const alt = 'test'

    cy.mount(<PlaceholderImage alt={alt} />)

    cy.get('img').should('have.attr', 'alt', alt)
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
