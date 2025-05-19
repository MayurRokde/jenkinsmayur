describe('BrowserStack Menu Test', () => {
  it('should check if Sign in is visible in the menu', () => {
    // Visit the BrowserStack website
    cy.visit('https://www.browserstack.com');
  
    // Check if the 'Sign in' link is visible in the menu
    cy.get('a[title="Sign in"]')
      .should('be.visible')
      .and('have.attr', 'href')
      .should('include', '/users/sign_in');  // Verifying the href as an additional check
  });
});