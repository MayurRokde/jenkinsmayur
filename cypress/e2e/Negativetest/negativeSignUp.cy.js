describe('Negative Test Case: Login to BrowserStack with Invalid Credentials', () => {
  it('should show an error message for invalid credentials', () => {
    // Visit the BrowserStack login page with custom headers and failOnStatusCode: false to handle 403 errors gracefully
    cy.visit('https://www.browserstack.com/users/sign_in', {
      failOnStatusCode: false, // Prevent Cypress from failing due to the 403 error
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' // Simulate a real browser's user agent
      }
    });

    // Check that the page was visited, even if 403 is returned
    cy.url().should('include', '/users/sign_in'); // Ensure we are still on the login page

    // Enter invalid email address
    cy.get('#user_email_login')
      .type('invalidemail@example.com')
      .should('have.value', 'invalidemail@example.com'); // Verify invalid email entered

    // Enter invalid password
    cy.get('#user_password')
      .type('wrongpassword')
      .should('have.value', 'wrongpassword'); // Verify invalid password entered

    // Click on the submit button to attempt to log in
    cy.get('#user_submit')
      .click();

    // Verify that the error message for invalid credentials is shown
    cy.get('.error-msg')
      .should('be.visible')  // Ensure the error message container is visible
      .find('span')
      .should('have.text', 'Invalid email or password');  // Verify the exact error message text
  });
});
