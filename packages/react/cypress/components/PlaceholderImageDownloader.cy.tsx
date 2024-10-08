import { PlaceholderImageDownload } from '../../src/components/PlaceholderImageDownloader'

describe('<PlaceholderImageDownload />', () => {
  it('renders', () => {
    cy.mount(<PlaceholderImageDownload />)

    cy.contains('Download')
      .click()
      .then(() => {
        cy.readFile('cypress/downloads/placeholder.png').should('exist')
      })
  })

  it('renders with custom component', () => {
    cy.mount(<PlaceholderImageDownload component={<button>Click</button>} />)

    cy.get('button')
      .click()
      .then(() => {
        cy.readFile('cypress/downloads/placeholder.png').should('exist')
      })
  })
})
