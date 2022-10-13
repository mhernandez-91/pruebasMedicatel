describe("Agendar cita en informativo", () => {
  let numMedico = Math.floor(Math.random() * 4 + 1);

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  //Acceder a la pagina informativo medicatel
  it("Navegar a la pagina medicatel informativo", () => {
    cy.visit("https://informativo-dev.medicatel.red/medicatel");
    cy.get("[href='/agenda'] > .btn").click();
    cy.get(".form-control").type("Van");
    cy.get(
      ":nth-child(1) > :nth-child(5) > .caja-btnAgda > .d-web > .btn"
    ).click();

    cy.get(".caja-servicio").click();
    cy.get(
      ".carousel-fecha-prev > #icon_navigation_chevron_left_24px"
    ).dblclick();
    cy.get("#agendarCita").click({ force: true });
    cy.get("#carouselActive > :nth-child(3)").should("be.visible").click();

    cy.get("#dropdownMenuButton").click();
    cy.get(".dropdown-menu > :nth-child(2) > .category_item > p").click();
    cy.get("#agendarCita").click().wait(3000);

    /* cy.get("#identidad").click(); */
    cy.get("#identidad").type("0801199112280");

    cy.get("#fechaNacimiento").type("1991-06-25");
    cy.get("#mediumBody > .row").click();
    cy.get(".my-4 > .btn-primary").click();
    cy.get(".btn-caja > .btn").click();
    cy.get(".pb-5 > a > .btn").click();
  });
});
