# Tech Quiz Test Suite

## Description

The Tech Quiz Test Suite is a comprehensive testing environment built for a technical quiz application. This project demonstrates modern testing practices using Cypress for both end-to-end (E2E) and component testing of a React-based quiz application.

Key motivations and solutions:

- Ensures reliability and functionality of interactive quiz features
- Demonstrates best practices in testing React applications
- Implements both component and E2E testing strategies
- Provides a template for testing similar interactive web applications

## Technologies used:
- React for frontend components
- Cypress for testing
- Bootstrap for styling
- Node.js/Express for backend
- TypeScript for type safety

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Credits](#credits)
- [License](#license)
- [Links](#links)

## Installation

## 1. Clone the repository:
```
git clone https://github.com/Moosorkh/TechQuizTestSuite.git
```

## 2. Install dependencies:

```bash
npm install
cd client && npm install
cd ../server && npm install
```
Set up your environment variables:

```bash
cp .env.example .env
```
Start the development environment:
```bash
npm run start:dev
```
# Usage
The test suite includes two main types of tests:

## 1. E2E Tests (cypress/e2e/quiz.cy.js):

- Tests complete user flows
- Verifies API integrations
- Ensures proper quiz functionality

## 2. Component Tests (cypress/component/Quiz.cy.jsx):

- Tests individual component behavior
- Verifies UI states
- Validates user interactions

## To run tests:

```bash
# Run all tests
npm test

# Open Cypress UI
npm run test:open
```
## Example test scenario:
```javascript
javascriptCopydescribe('Tech Quiz E2E Test', () => {
  it('starts the quiz, answers questions, and completes it', () => {
    cy.get('button.btn.btn-primary')
      .contains('Start Quiz')
      .click();
    
    // Test continues...
  });
});
```
## Testing
The project includes three main testing features:

1. Component Testing
- Individual component behavior
- State management
- User interactions
2. E2E Testing
- Full user flows
- API integration
- Cross-component functionality
3. API Mocking
- Fixture-based responses
- Network request interception
- Error scenario testing

## To run specific test suites:
```bash
bashCopy# Run E2E tests
npx cypress run

# Run component tests
npx cypress component
```
# Credits
Third-party resources:

- Cypress Documentation
- React Testing Library
- Bootstrap

# License
MIT License - see the LICENSE file for details.

# Features

- Comprehensive test coverage for quiz application
- Component and E2E testing capabilities
- API mocking and interception
- Real-time test feedback
- Custom fixture support
- Cross-browser testing support

## How to Contribute

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

Please ensure your tests pass before submitting:
```bash
npm test
```

# Tests

## Example test commands:
```bash
bashCopy# Run all tests
npm test

# Run E2E tests only
npm run test:e2e

# Run component tests only
npm run test:component

# Open Cypress UI
npm run test:open
```
# Links
[Link to the Video](https://drive.google.com/file/d/1RgET0VvG9tRQlqks6cfCLet_AeEp67NB/view)

[GitHub Repo](https://github.com/Moosorkh/TechQuizTestSuite.git)