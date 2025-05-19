describe('BrowserStack Menu Test', () => {
  it('should check if Sign in is visible in the menu and verify the Sign In page URL', () => {
    // Visit the BrowserStack website
    cy.visit('https://www.browserstack.com');
    
    // Check if the 'Sign in' link is visible in the menu
    cy.get('a[title="Sign in"]')
        .should('be.visible')
        .and('have.attr', 'href')
        .should('include', '/users/sign_in');  // Verifying the href as an additional check
    
    // Click the 'Sign in' link
    cy.get('a[title="Sign in"]').click();
    
    // Verify that the Sign In page URL is loaded
    cy.url().should('include', '/users/sign_in');  // Check if the URL contains '/users/sign_in'
  });
});
  