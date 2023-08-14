
//alert(Cypress.env('MY_ENV_VARIBLE'));
describe('Basic page interactions', ()=> {
    beforeEach(() => {
        cy.visit('/example-4');
    
    });

    it('sets headers text to item\'s name when double clicked', () => {
        cy.get('[data-cy=box-1-items-list] > :nth-child(2)').dblclick();
        cy.get('[data-cy="box-1-selected-name"]').invoke('text').should('equal','Option Two');
    });

    it('displays the correct count for the numbers of selected checkboxes', ()=> {
        cy.get('[data-cy="box-2-checkboxes"] > :nth-child(1) input').check();
        cy.get('[data-cy="box-2-selected-count"]').invoke('text').should('equal', '1');
    });

    it('displays the name of the currently seected item', ()=> {
        cy.get('[data-cy="box-3-dropdown"]').select('Option Three');
        cy.get('[data-cy="box-3-selected-name"]').invoke('text').should('equal', 'Option Three');

    });

    it('should disaply the name of the most recently hovered item ', () => {
        cy.get('[data-cy="box-4-items-list"] > :nth-child(2)').trigger('mouseover');
        cy.get('[data-cy="box-4-selected-name"]').invoke('text').should('equal', 'Option Two');
    });
});

/************* https://docs.cypress.io/api/table-of-contents *************/

/*Comman Assertion 
# should('have.length',4)
# should('exist')
# should('not.exist')
# should('be.visible')
# should('not.be.visble')
# should('have.class', 'selected')
# should('have.css', 'background-color' , 'blue')
# should('contain')
# should('not.contain')
*/


/* Env Variables
# By pass the variable to running command
 npx cypress open --env MY_ENV_VARIABLE="hello"
# Add them to cypress.config.js file
    "env": {
             "MY_ENV_VARIABLE" : "hello"
            }
# Create another file Like cypress.env.json
 */


/*Test Doubles - sinon Library
#cy.stubs()

import ({api} from './my-api';
/////////api.getUser();
cy.stub(api,'getUser).returns({'name :'sara'});
cy.stub(api,'getUser).resolves({'name :'sara'});
cy.stub(api,'getUser).rejects();

#cy.spy()

import ({api} from './my-api';
/////////api.getUser();
const mySpy = cy.spy(api, 'getUser');
expect(mySpy).to.be.called;
*/


/* The warp Command 
cy.get('h1').then($element => {
    cy.wrap($element).should(..............);
});
*/

/* The and Command 
cy.get('h1').should(...).and(...);
*/

/* The .filter and .not Command 

<div>
    <h1> .....</h1>
    <p> .....</p>
    <h3> .....</h3>
    <p> .....</p>
</div>

cy.get('div').filter('h1');
cy.get('div').not('p');
*/

/* Special Characters like Enter, Tab, Esc ...... 

<div>
    <h1> .....</h1>
    <p> .....</p>
    <h3> .....</h3>
    <p> .....</p>
</div>

cy.get('div').type('This is a test {enter}');
*/