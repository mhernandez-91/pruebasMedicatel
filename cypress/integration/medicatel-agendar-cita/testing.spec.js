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
  });

  //Acceder al enlace agenda
  it("Acceder al enlace agenda", () => {
    cy.get("[href='/agenda'] > .btn").click();
  });

  //Seleccionar medico
  /* it("Seleccionar medico", () => {
    cy.get(
      `:nth-child(${numMedico}) > :nth-child(5) > .caja-btnAgda > .d-web > .btn`
    ).click();
  }); */

  //Cambiar orden alfabetico de medicos
  /* it("Cambiar orden medicos", () => {
    cy.get(
      "#redMedico > thead.d-web > .titulos-table > .space-titulo-table"
    ).click();
  }); */

  //Seleccionar medico filtrado en el buscador
  it("Seleccionar medico con buscador", () => {
    cy.get(".form-control").type("Van");
    cy.get(
      ":nth-child(1) > :nth-child(5) > .caja-btnAgda > .d-web > .btn"
    ).click();
  });

  //Seleccionar campos de cita
  it("Seleccionar campos para agendar cita", () => {
    cy.get(".caja-servicio").click();
    cy.get(
      ".carousel-fecha-prev > #icon_navigation_chevron_left_24px"
    ).dblclick();
    cy.get("#agendarCita").click({ force: true });
    cy.get(
      "#carouselActive > :nth-child(3                                                                                      ) "
    )
      .should("be.visible")
      .click();

    cy.get("#dropdownMenuButton").click();
    cy.get(".dropdown-menu > :nth-child(3) > .category_item > p").click();
    cy.get("#agendarCita").click();
  });

  //Llenar datos de afiliado en ventana modal para confirmar cita
  it("Ingreso de datos afiliado", () => {
    cy.get("#identidad").click();
    cy.get("#identidad").type("0801199308222");
    cy.get("#fechaNacimiento").type("1993-04-24");
    cy.get("#mediumBody > .row").click();
    cy.get(".my-4 > .btn-primary", { timeout: 6000 }).click();
    /* cy.get(".btn-outline-primary").click(); */
  });
});
