describe('Tech Quiz E2E Test', () => {
    beforeEach(() => {
      // Visit the page with a longer timeout
      cy.visit('/', { timeout: 30000 });
      
      // Log the current URL for debugging
      cy.url().then(url => {
        cy.log(`Current URL: ${url}`);
      });
  
      // Use the fixture file for questions
      cy.intercept('GET', '/api/questions/random', { 
        fixture: 'questions.json',
        statusCode: 200 
      }).as('getQuestions');
  
      // Wait for the page to load
      cy.get('body').should('be.visible');
    });
  
    it('starts the quiz, answers questions, and completes it', () => {
      // Debug log
      cy.log('Starting test - looking for Start Quiz button');
      
      // Start the quiz
      cy.get('button.btn.btn-primary')
        .contains('Start Quiz')
        .should('be.visible', { timeout: 10000 })
        .click();
      
      // Wait for API response
      cy.wait('@getQuestions');
      
      // Verify question display
      cy.get('.card')
        .should('be.visible')
        .within(() => {
          cy.get('h2')
            .should('not.be.empty');
        });
      
      // Answer question
      cy.get('button.btn.btn-primary')
        .first()
        .should('be.visible')
        .click();
      
      // Verify completion
      cy.get('h2')
        .should('contain', 'Quiz Completed');
      
      cy.get('.alert-success')
        .should('be.visible')
        .and('contain', 'Your score');
      
      // Verify restart option
      cy.get('button.btn.btn-primary')
        .contains('Take New Quiz')
        .should('be.visible');
    });
  });