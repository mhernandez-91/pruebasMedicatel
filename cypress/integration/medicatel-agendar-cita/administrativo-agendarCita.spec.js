describe("Agendar cita en administrativo", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  //Acceder a la pagina informativo medicatel
  it("Navegar a la pagina medicatel informativo", () => {
    cy.visit("https://admin-dev.medicatel.red/login");
  });

  //Agendar cita desde plataforma administrador
  it("Agendar cita", () => {
    cy.visit("https://admin-dev.medicatel.red/login");
    cy.get("#email").type("pruebas@medicatel.red");
    cy.get("#password").type("MX8Rxnf5gHdf");
    cy.get(".col-md-8 > .btn-primary").click();

    cy.get(":nth-child(5) > .d-flex > .menu-title").click();

    //Acceder al boton de agregar cita
    cy.get("a > .btn").click();

    //Buscar paciente
    cy.get("#select2-personas_buscar-container").click().wait(2000);
    cy.get(".select2-search__field").type("Nelly Alvarez{enter}").wait(2000);

    //Seleccionar servicio medico
    cy.get("#filtro-servicios > :nth-child(1)").click().wait(2000);

    //Buscar medico
    cy.get("label > .form-control").type("vania");
    cy.get(":nth-child(1) > :nth-child(7) > form > .btn").click();

    //Seleccionar fecha y hora
    cy.get(".dayContainer > :nth-child(20)").click().wait(2000);
    cy.get("#horas_disponibles > :nth-child(2)").click();
    cy.get("#btn_agendar_dummy").click();

    //Revisar cita creada
    cy.get("#semanalFiltro").click().wait(2000);
    cy.get("#tabla-citas_filter > label > .form-control").type("vania");
  });
});
