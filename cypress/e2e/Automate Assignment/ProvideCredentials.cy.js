describe('BrowserStack Menu Test - Login Functionality', () => {

  // Test for Correct Credentials
  it('should log in successfully with correct credentials', () => {
    // Visit the BrowserStack website
    cy.visit('https://www.browserstack.com');
      
    // Click the 'Sign in' link
    cy.get('a[title="Sign in"]').click();
    
    // Verify the Sign In page URL
    cy.url().should('include', '/users/sign_in');
    
    // Enter email and password
    cy.get('#user_email_login').type('mayurok50@gmail.com');
    cy.get('#user_password').type('mayur@1234');
    
    // Click the Terms and Conditions checkbox
    cy.get('#tnc_checkbox').check();
    
    // Click the 'Sign me in' button
    cy.get('#user_submit').click();
    
    // Verify that the URL changes after successful login (i.e., no longer on the sign-in page)
    cy.url().should('not.include', '/users/sign_in');
    
    // Optionally, verify that a user-specific element appears (indicating successful login)
    // Example: Check if the user profile or dashboard is visible
    cy.get('.user-profile').should('be.visible');  // Update this selector to match the actual profile or dashboard element
  });
  
  // Test for Incorrect Credentials
  it('should show an error with incorrect credentials', () => {
    // Visit the BrowserStack website
    cy.visit('https://www.browserstack.com');
      
    // Click the 'Sign in' link
    cy.get('a[title="Sign in"]').click();
    
    // Verify the Sign In page URL
    cy.url().should('include', '/users/sign_in');
    
    // Enter invalid email and password
    cy.get('#user_email_login').type('invalidemail@example.com');  // Incorrect email
    cy.get('#user_password').type('wrongpassword');               // Incorrect password
    
    // Click the Terms and Conditions checkbox
    cy.get('#tnc_checkbox').check();
    
    // Click the 'Sign me in' button
    cy.get('#user_submit').click();
    
    // Verify that the URL remains the same, indicating the login failed
    cy.url().should('include', '/users/sign_in');
    
    // Verify that the error message "Invalid password" is visible
    cy.get('.error-msg')
        .should('be.visible')  // Ensure the error message container is visible
        .find('span')          // Find the span inside the error-msg container
        .should('have.text', 'Invalid password');  // Verify the exact error text
  });
  
});
  