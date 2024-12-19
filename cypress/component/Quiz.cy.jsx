import Quiz from "../../client/src/components/Quiz";

describe('Quiz Component', () => {
  beforeEach(() => {
    // Use fixture for mock API response
    cy.intercept('GET', '/api/questions/random', { 
      fixture: 'questions.json',
      statusCode: 200 
    }).as('getRandomQuestion');
  });

  it('should start the quiz and display the first question', () => {
    cy.mount(<Quiz />);
    
    // Wait for initial render
    cy.get('body').should('be.visible');
    
    // Start the quiz
    cy.get('button.btn.btn-primary')
      .contains('Start Quiz')
      .should('be.visible')
      .click();
    
    // Wait for API response
    cy.wait('@getRandomQuestion');
    
    // Verify quiz is displayed
    cy.get('.card').should('be.visible');
    cy.get('h2')
      .should('be.visible')
      .and('not.be.empty');
  });

  it('should answer questions and complete the quiz', () => {
    cy.mount(<Quiz />);
    
    // Start quiz
    cy.get('button.btn.btn-primary')
      .contains('Start Quiz')
      .should('be.visible')
      .click();
    
    // Wait for API response
    cy.wait('@getRandomQuestion');
    
    // Answer first question
    cy.get('button.btn.btn-primary').first().click();
    
    // Verify completion state
    cy.get('h2').should('contain', 'Quiz Completed');
    cy.get('.alert-success')
      .should('be.visible')
      .and('contain', 'Your score');
  });

  it('should restart the quiz after completion', () => {
    cy.mount(<Quiz />);
    
    // Start quiz
    cy.get('button.btn.btn-primary')
      .contains('Start Quiz')
      .should('be.visible')
      .click();
    
    // Wait for API response
    cy.wait('@getRandomQuestion');
    
    // Complete quiz
    cy.get('button.btn.btn-primary').first().click();
    
    // Restart quiz
    cy.get('button.btn.btn-primary')
      .contains('Take New Quiz')
      .should('be.visible')
      .click();
    
    // Verify restart
    cy.get('.card').should('be.visible');
    cy.get('h2')
      .should('be.visible')
      .and('not.be.empty');
  });
});