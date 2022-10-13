describe("Revisar cita en administrativo", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  let monto;
  let linkPago;

  //Acceder a la pagina informativo medicatel
  it("Navegar a la pagina medicatel informativo", () => {
    cy.visit("https://admin-dev.medicatel.red/login");
  });

  //Hacer login pagina administrativo
  it("Login pagina administrativo", () => {
    cy.visit("https://admin-dev.medicatel.red/login");
    cy.get("#email").type("pruebas@medicatel.red");
    cy.get("#password").type("MX8Rxnf5gHdf");
    cy.get(".col-md-8 > .btn-primary").click();

    //Navegar a citas
    cy.get(":nth-child(5) > .d-flex > .menu-title").click();
    cy.wait(2000);

    //Filtrar por nombre (vania)
    cy.get("#semanalFiltro").click().wait(2000);
    cy.get("#tabla-citas_filter > label > .form-control").type("vania");

    //Acceder a opciones de pago
    cy.get(
      ":nth-child(1) > :nth-child(8) > .dropdown > #dropdownMenuButton > .fa"
    ).click();
    cy.get(
      ":nth-child(1) > :nth-child(8) > .dropdown > .dropdown-menu > button.dropdown-item > span"
    ).click();

    //Escribir el monto a pagar
    cy.get("#monto_total_pagar").as("monto");
    cy.get("@monto").then(($monto) => {
      monto = $monto.val();
      cy.get("#monto_pagar").type(monto);
    });

    //Crear link y acceder al pago
    cy.get("#generateLinkFactura").click().wait(2000);
    cy.get("#linkPagoFactura").as("linkPago");
    cy.get("@linkPago").then(($linkPago) => {
      linkPago = $linkPago.val();
      cy.visit(linkPago);
    });

    //Ingresar datos de tarjeta
    cy.get("#nombreTarjeta").type("Nelly Alvarez");
    cy.get("#numeroTarjeta").type("4111111111111111");
    cy.get("#vencimientoTarjeta").type("12/25");
    cy.get("#codigoTarjeta").type("300");
    cy.get(".btn-caja > .btn").click();
    cy.get(".pb-5 > a > .btn").click();
  });
});
