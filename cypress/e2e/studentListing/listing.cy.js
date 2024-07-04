describe('student dashboard', () => {
  const waitingTime = 2000
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  afterEach(() => {
    cy.wait(waitingTime)
  })

  it('can successfully visit dashboard', () => {
    cy.contains('View details').should('exist')
  })
  it('can successfully filter by grade', () => {
    cy.get(':nth-child(1) > select').select('Class 4')
    cy.wait(waitingTime)
    cy.get('.containerWrapper > :nth-child(1) > :nth-child(2) > :nth-child(2)').contains('Class 4').should('exist')
  })
  it('can successfully sort by gender female first', () => {
    cy.get(':nth-child(3) > select').select('Female (female first)')
    cy.wait(waitingTime)
    cy.get('.containerWrapper > :nth-child(1) > :nth-child(2) > :nth-child(4)').contains('Gender: female').should('exist')
  })
  it('can successfully sort by gender male first', () => {
    cy.get(':nth-child(3) > select').select('Male (male first)')
    cy.wait(waitingTime)
    cy.get('.containerWrapper > :nth-child(1) > :nth-child(2) > :nth-child(4)').contains('Gender: male').should('exist')

  })
  it('can successfully sort by grade ascending', () => {
    cy.get(':nth-child(4) > select').select('ASC')
    cy.wait(waitingTime)
    cy.get('.containerWrapper > :nth-child(1) > :nth-child(2) > :nth-child(2)').contains('Grade: Class 1').should('exist')

  })
  it('can successfully sort by grade descending', () => {
    cy.get(':nth-child(4) > select').select('Desc')
    cy.wait(waitingTime)
    cy.get('.containerWrapper > :nth-child(1) > :nth-child(2) > :nth-child(2)').contains('Grade: Class 8').should('exist')
  })
  it('can successfully request selected records per page', () => {
    cy.scrollTo('bottom')
    cy.wait(waitingTime)
    cy.contains('showing 10 of 200 students').should('exist')
    cy.get('.footer > .filterContainer > select').select('20 records per page')
    cy.scrollTo('bottom')
    cy.contains('showing 20 of 200 students').should('exist')
  })

  it('can successfully paginate to next page', () => {
    cy.scrollTo('bottom')
    cy.wait(waitingTime)
    cy.contains('page 1 of 20').should('exist')
    cy.get('.next-back > :nth-child(2)').click()
    cy.contains('page 2 of 20').should('exist')
  })

  it('can successfully navigate to details', () => {
    cy.get(':nth-child(1) > :nth-child(3) > .detailsBtn').click()
    cy.contains('Student details page').should('exist')
  })
  
  it('can successfully back to listing', () => {
    cy.get(':nth-child(1) > :nth-child(3) > .detailsBtn').click()
    cy.contains('Student details page').should('exist')
    cy.wait(waitingTime)
    cy.get('.detailsBtn').click()
    cy.contains('View details').should('exist')
  })
})