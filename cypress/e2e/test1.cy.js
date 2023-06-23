
describe('Seleccionar vuelos economicos', () => { //grupo de test
  it('Realizar búsqueda de vuelos', () => { // CASO DE PRUEBA 1: Ingresar la información...
    //cy.origin('https://www.wingo.com/', () => { //Comando para solucionar error de carga de página, 
    //no detectado desde un script de origen cruzado.
    //cy.wait(3000) // cy esperará 3 segundos para mostrar la página.
    cy.visit('/') // Cargar la página base.
    cy.get('.input-origen > .select-drop > .info-airport > .select > .styledSelectOrigen').click({ force: true })
    cy.wait(7000)
    cy.get('.optionsOrigen > li[data-cod="BOG"]').click()
    cy.get('.optionsDestino > li[data-cod="CLO"]').click()
    cy.wait(7000)
    //Seleccionar día de ida 
    cy.get('.input-ida > .cont-calendar > .cont-months > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(4) > :nth-child(5)').click({ force: true })
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
    cy.visit('http://booking.wingo.com/es/search/BOG/CLO/2023-06-23/2023-07-22/2/0/0/0/COP/0/0')
    cy.wait(7000)


    //Seleccionar vuelo ida más económico
    cy.get('#vuelos-ida > div > div > div.row.row-eq-height.align-items-center').click({ multiple: true })
    //Seleccionar vuelo regreso más económico
    cy.get('#vuelos-regreso > div:nth-child(1) > div > div.row.row-eq-height.align-items-center').click({ force: true })
    /* dar click en las cards */
    cy.get('#vuelos-ida > div > div > div:nth-child(2) > div > div > div:nth-child(1)').click({ force: true })
    cy.wait(4000)
    cy.get('#vuelos-regreso > div.ng-star-inserted.container-selected > div > div:nth-child(2) > div > div > div:nth-child(1)').click({ force: true })
    /* BOTON DE CONTINUAR */
    cy.get('.continue .btn-continuar').click({ force: true })

    //// COMPLETAR INFORMACIÓN DE VIAJEROS
    cy.wait(4000)
    cy.get('#name-1-1').type('Diana Marcela')
    cy.get('#lastname-1-1').type('Oviedo Murillo')
    cy.get('#sex-input-1-1')
  })
})