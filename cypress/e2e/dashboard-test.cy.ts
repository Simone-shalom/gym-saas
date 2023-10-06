// cypress/integration/dashboardPage.spec.js

// cypress/integration/dashboardPage.spec.js

describe("Dashboard Page", () => {

  it("should load the Dashboard page", () => {
    // Verify that the Dashboard page is loaded
    cy.visit("/dashboard"); // Replace with the actual URL where your DashboardPage component is located
    cy.contains("Your dashboard").should("be.visible");
  });

  it("should open GitHub link in a new tab", () => {
    // Click the GitHub button
    cy.contains("Github").click({ force: true }); // Use { force: true } to allow opening in a new tab

    // Verify that a new tab is opened
    cy.window().should("have.attr", "target", "_blank");

    // Verify that the URL matches your GitHub link
    cy.url().should("eq", "https://github.com/Simone-shalom/gym-saas");
  });

  it("should navigate to other pages when clicking cards", () => {
    // Click a card to navigate to another page
    cy.get(".card").first().click();

    // Verify that the URL matches the expected URL for the clicked card
    // Replace "/expected-url" with the expected URL for the clicked card
    cy.url().should("eq", "/expected-url");
  });

  // Add more specific test cases as needed to thoroughly test your DashboardPage component
})