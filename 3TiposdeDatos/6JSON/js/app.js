"use strict"

// JSON => JavaScript Object Notation

var persona = {nombre: 'Ernesto', twitter: 'ErnestoLazaros'};

var personas = [
    {nombre: 'Miris', twitter: 'dcMiris'},
    {nombre: 'AleDormilongue', twitter: 'dcAleDormilongue'},
    {nombre: 'Bonis', twitter: 'dcBonis'},
    persona
]

var personaJSON = JSON.stringify(persona);

var nuevaPersona = JSON.parse(personaJSON)
