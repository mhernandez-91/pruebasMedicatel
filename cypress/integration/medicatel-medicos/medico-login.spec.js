import randomString from "../../../helpers/random-string";

describe("Pruebas de login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  beforeEach(() => {
    cy.visit("http://localhost:8000/medico/login");
  });

  afterEach(() => {
    cy.wait(3000);
  });

  //Prueba hacer login sin ingresar datos en campo correo
  it("Login sin ingresar correo", () => {
    cy.get("#password").type("testing");
    cy.get(".btn").click();
  });

  //Prueba hacer login sin ingresar datos en campo contrasena
  it("Login sin ingresar contrasena", () => {
    cy.get("#email").type("lvillatoro@medicatel.red");
    cy.get(".btn").click();
  });

  //Prueba hacer login sin ingresar datos en campos de correo ni contrasena
  it("Login sin ingresar correo ni contrasena", () => {
    cy.get(".btn").click();
  });

  //Prueba hacer login ingresando correo incorrecto
  it("Login correo incorrecto", () => {
    cy.get("#email").type(`${randomString}@medicatel.red`);
    cy.get("#password").type("testing");
    cy.get(".btn").click();
  });

  //Prueba hacer login ingresando contrasena incorrecta
  it("Login contrasena incorrecta", () => {
    cy.get("#email").type("lvillatoro@medicatel.red");
    cy.get("#password").type(randomString);
    cy.get(".btn").click();
  });

  //Click en enlace olvidate tu contrasena
  it("Login sin ingresar correo ni contrasena", () => {
    cy.get("a > strong").click();
    cy.go("back");
  });

  //Prueba hacer login con datos correctos de usuario de prueba, ingresar con tecla enter
  it("Login con datos correctos de usuario de prueba, ingreso tecla enter", () => {
    cy.get("#email").type("lvillatoro@medicatel.red");
    cy.get("#password").type("testing{enter}");
  });

  //Prueba hacer login con datos correctos de usuario de prueba
  it("Login con datos correctos de usuario de prueba", () => {
    cy.get("#email").type("lvillatoro@medicatel.red");
    cy.get("#password").type("testing");
    cy.get(".btn").click();
  });
});
