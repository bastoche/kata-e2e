describe("duckduckgo", () => {
  it("searches for kraaft", () => {
    cy.visit("https://duckduckgo.com/");
    cy.contains("Tired of being tracked");
    cy.get("#search_form_input_homepage")
      .click()
      .type("kraaft.co")
      .type("{enter}");
    cy.contains("Le suivi de chantier");
  });
});
