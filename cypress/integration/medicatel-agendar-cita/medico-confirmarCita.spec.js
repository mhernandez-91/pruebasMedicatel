describe("Revisar cita en administrativo", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("confirmar cita", () => {
    //Login
    cy.visit("https://medicos-dev.medicatel.red/medico/login");
    cy.get("#email").type("vaniabarahona.ochoa@gmail.com");
    cy.get("#password").type("123456789");
    cy.get(".btn").click();

    //Acceder a citas pendientes
    cy.get(":nth-child(6) > .d-flex > .menu-item").click().wait(3000);

    //Confirmar la cita del paciente de la primera fila
    cy.get(
      "tbody > :nth-child(1) > :nth-child(7) > div > :nth-child(1) > button > img"
    )
      .click()
      .wait(3000);
    cy.get(
      "#cita_confirmada > .modal-dialog > .modal-content > .modal-footer > .btn"
    ).click();
  });
});
