
describe('Seleccionar vuelos economicos', () => { //grupo de test
  it('Realizar búsqueda de vuelos', () => { // CASO DE PRUEBA 1: Ingresar la información...
    //cy.origin('https://www.wingo.com/', () => { //Comando para solucionar error de carga de página, 
    //no detectado desde un script de origen cruzado.
    //cy.wait(3000) // cy esperará 3 segundos para mostrar la página.
    cy.visit('/') // Cargar la página base.
    cy.get('.input-origen > .select-drop > .info-airport > .select > .styledSelectOrigen').click({ force: true })
    cy.wait(8000)
    cy.get('.optionsOrigen > li[data-cod="BOG"]').click()
    cy.get('.optionsDestino > li[data-cod="CLO"]').click()
    cy.wait(8000)
    //Seleccionar día de ida 
    cy.get('.input-ida > .cont-calendar > .cont-months > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(4) > :nth-child(7)').click({ force: true })
    //Seleccionar día de regreso 
    cy.get('.input-regreso > .cont-calendar > .cont-months > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month2 > tbody > :nth-child(4) > :nth-child(6)').click({ force: true })
    //Seleccionar cantidad de pasajeros
    cy.get('.input-pasajeros > .select-passenger > :nth-child(1) > .bts-add > .plus').click({ force: true })

    //Buscar vuelo
    //cy.get('.mobile > :nth-child(1) > :nth-child(5)').click({ force: true })

    //})
  })

  it('Seleccionar vuelos baratos ida y regreso', () => {
    //cy.origin('https://booking.wingo.com/es/search/BOG/CLO/2023-06-23/2023-07-22/2/0/0/0/COP/0/0', () => {
    cy.visit('https://booking.wingo.com/es/search/BOG/CLO/2023-06-25/2023-07-22/2/0/0/0/COP/0/0')
    cy.wait(9000)


    //Seleccionar vuelo ida más económico
    //cy.get('#vuelos-ida > div > div > div.row.row-eq-height.align-items-center').click({ multiple: true })
    // Se comenta la línea anterior debido a que para las fechas seleccionadas, sólo aparece 1 vuelo de ida y por defecto está seleccionado.
    //Seleccionar vuelo regreso más económico
    cy.get('#vuelos-regreso > div:nth-child(1) > div > div.row.row-eq-height.align-items-center').click({ force: true })
    //Dar click en las cards
    cy.wait(7000)
    cy.get('#vuelos-ida > div > div > div:nth-child(2) > div > div > div:nth-child(1)').click({ force: true })
    cy.wait(7000)
    cy.get('#vuelos-regreso > div.ng-star-inserted.container-selected > div > div:nth-child(2) > div > div > div:nth-child(1)').click({ force: true })
    //Click en botón "Continuar"
    cy.get('.continue .btn-continuar').click({ force: true })


    //// COMPLETAR INFORMACIÓN DE VIAJEROS////
    // VIAJERO 1 //
    cy.wait(7000)
    // Ingresar nombres
    cy.get('#name-1-1').type('Diana Marcela')
    // Ingresar apellidos
    cy.get('#lastname-1-1').type('Oviedo Murillo')
    // Seleccionar género
    cy.get('#sex-input-1-1').select('Femenino').should('have.value', 'F')
    // Seleccionar fecha de nacimiento (año-mes-dia)
    cy.get('form#1-birthday-0 > select[name="year"]').select('2000', { force: true }).should('have.value', '2000')
    cy.get('form#1-birthday-0 > select[name="month"]').select('Mar', { force: true }).should('have.value', '2')
    cy.get('form#1-birthday-0 > select[name="day"]').select('22', { force: true }).should('have.value', '22')
    // Ingresar correo electrónico
    cy.get('#email-1-1').type('dianamarcelaoviedo76@gmail.com')
    // Ingresar confirmación de correo electrónico
    cy.get('#email-confirm-1-1').type('dianamarcelaoviedo76@gmail.com')
    // Ingresar el teléfono
    cy.get('#phone-1-1').type('3117679007', { force: true })
    // Ingresar número de documento
    cy.get('#numero-1-1').type('1198776522')

    // VIAJERO 2 //
    // Ingresar nombres
    cy.get('#name-1-2').type('Juan Sebastian')
    // Ingresar apellidos
    cy.get('#lastname-1-2').type('Ortiz Perez')
    // Seleccionar género
    cy.get('#sex-input-1-2').select('Masculino').should('have.value', 'M')
    // Seleccionar fecha de nacimiento (año-mes-dia)
    cy.get('form#1-birthday-1 > select[name="year"]').select('1998', { force: true }).should('have.value', '1998')
    cy.get('form#1-birthday-1 > select[name="month"]').select('Dic', { force: true }).should('have.value', '11')
    cy.get('form#1-birthday-1 > select[name="day"]').select('15', { force: true }).should('have.value', '15')
    // Ingresar número de documento
    cy.get('#numero-1-2').type('318796633')

  })
})