/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
    interface Chainable<Subject = any> {
      signIn: () => void;
    }
  }
  
  Cypress.Commands.add('signIn', () => {
    cy.log('Signing in.');
    cy.visit('/');
  
    cy.window().should((window) => {
      expect(window).to.have.property('Clerk');
      expect((window as any).Clerk.isReady()).to.eq(true);
    });
  
    cy.window()
      .then((window) => {
        const win = window as typeof window & { Clerk: any };
        cy.clearCookies({ domain: win.location.hostname });
        return win.Clerk.client.signIn.create({
          identifier: Cypress.env('test_email'),
          password: Cypress.env('test_password'),
        }).then((res: { createdSessionId: string }) => {
          return win.Clerk.setActive({
            session: res.createdSessionId,
          });
        });
      })
      .then(() => {
        cy.log('Finished Signing in.');
      });
  });