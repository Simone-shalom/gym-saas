// cypress/integration/landingPage.spec.js

describe("Landing Page", () => {
    beforeEach(() => {
      // Visit the Landing page
      cy.visit(""); // Replace with the actual URL where your LandingPage component is located
    });
  
    it("should load the Landing page", () => {
      // Verify that the Landing page is loaded
      cy.contains("LandingNavbar").should("be.visible");
      cy.contains("LandingHero").should("be.visible");
      cy.contains("LandingCategories").should("be.visible");
    });
  
    // Add more specific test cases as needed to thoroughly test your LandingPage component
  });
  