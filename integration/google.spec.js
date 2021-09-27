describe('Google Test', () => {
    it('Getting Search Box', () => {
        cy.visit('https://bing.com');
        cy.get('#sb_form_q').type('Hunny Coders{enter}');
        cy.get('#b_results li a').first().should('have.text', 'Hunny Coders - YouTube');
        expect(true).to.equal(true);
    }) 
})