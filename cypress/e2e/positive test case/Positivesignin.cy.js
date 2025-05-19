describe('Positive Test Case: Login to BrowserStack', () => {
  it('should successfully log in with valid credentials', () => {
    // Visit the BrowserStack login page
    cy.visit('https://www.browserstack.com/users/sign_in', {
      failOnStatusCode: false  // Prevent failure on non-2xx status codes
    });

    // Check if the login form is present (if not blocked)
    cy.get('#user_email_login').should('be.visible');
    
    // Enter email address
    cy.get('#user_email_login')
      .type('mayurok50@gmail.com')
      .should('have.value', 'mayurok50@gmail.com'); // Verify email entered correctly

    // Enter password
    cy.get('#user_password')
      .type('MBA20@iimc')
      .should('have.value', 'MBA20@iimc'); // Verify password entered correctly

    // Check the terms and conditions checkbox (if available)
    cy.get('#tnc_checkbox').then(($checkbox) => {
      if ($checkbox.length) {
        cy.wrap($checkbox).check().should('be.checked');
      }
    });

    // Click on the submit button to log in
    cy.get('#user_submit').click();

    // Verify successful login by checking if the user is redirected to the dashboard
    cy.url().should('include', '/dashboard'); // Or adjust this based on the actual URL
  });
});
