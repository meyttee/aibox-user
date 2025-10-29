describe("Home Page", () => {
  it("should load the home page successfully", () => {
    cy.visit("/");
    cy.get("h1").should("not.exist");
    cy.get("main").should("exist");
    cy.get("img[alt='Next.js logo']").should("exist");
    cy.get("button").should("contain", "theme");
  });

  it("should have working external links", () => {
    cy.visit("/");
    cy.get('a[href*="vercel.com"]').should("exist");
    cy.get('a[href*="nextjs.org"]').should("exist");
  });
});
