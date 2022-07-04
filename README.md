# crazy-cards-app
 An app that allows customers to enter their details and review credit cards that are applicable to their credit status.

## Capabilities

The FE app allows you to: 

1. Fill in a form, stating personal income and employment details.
2. View available card results.
3. Select individual card results and see total credit limit of selected cards.
4. View the details of an individual card.
5. Navigate back whilst maintaining app state.

### Bonus Features
1. A configured local server
2. An endpoint that returns mocked card details (not using db).
3. Endpoint testing

### What is missing
1. FE unit testing using jest (this would have been added if I had more time).
2. Nice styling.
3. A react router.
4. Date of birth validation (not critical to project description)
5. Address validation (not critical to project description)
6. Form validation and errors, currently errors are logged to the console. 

### What would I do if I had more time
1. Add more jest tests and unit test in the FE
    - Test rendering based on responses.
    - Test form validation.
    - Cypress tests
2. Structure html more better and implement nicer styling
3. Add a database instead of having a mocked data in the express app.
4. Date and birth date validation.

### Challenges
1. Setting up React using typescript.
2. Nice CSS with the time I had available to me. 

### What did I learn/improve?
1. Setting up the FE app, hadn't done this in a while
2. Configuring libraries like Jest/TypeScript/React
3. Configuring Select components from scratch. 

## How to run the project 
I have set this project up so it runs locally on the machine, to do this I have broken the FE (React, TypeScript, Joi) to communicate with 
a local server (ts-node, express.js). I have done this for simplicity, so please follow these few steps to run the project.

1. Clone the respository using yarn.
2. Navigate into `./crazy-card-react-app` and run the following

```
yarn //Install dependencies locally
yarn start //Begin running app locally
```
3. Navigate to `./crazy-card-api' and run the following

```
yarn //Install dependencies locally
yarn start //Begin running app locally
```
This should now allow the frontend (port:3000) to talk to the api (port:3001)

4. Enjoy