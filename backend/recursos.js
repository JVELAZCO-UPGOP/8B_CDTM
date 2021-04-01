module.exports ={
    mascotas: [
        {tipo: "Perro", nombre: "firulais", dueno: "Esteban"},
        {tipo: "Gato", nombre: "Toby", dueno: "Felix"},
        {tipo: "Ave", nombre: "pepe", dueno: "Julian"},
        ],
    veterinarias: [
        {identificacion: "987399", pais: "Mexico", nombre: "Roxana", apellido: "Navarrete"},
        {identificacion: "987399", pais: "Mexico", nombre: "Christian", apellido: "Tarango"},
        {identificacion: "987399", pais: "Mexico", nombre: "Joaquin", apellido: "Mendoza"},
      
    
        ],
    duenos: [
        {identificacion: "987399", pais: "Mexico", nombre: "Gabriela", apellido: "Sanchez"},
        {identificacion: "875766", pais: "Colombia", nombre: "Roxana", apellido: "Navarrete"},
        {identificacion: "573862", pais: "Venezuela", nombre: "Alex", apellido: "Jurado"},
        ],  
    consultas: [
        {
            mascota: 0,
            veterinaria: 0,
            fechaCreacion: new Date(),
            fechaEdicion: new Date(),
            historia: "",
            diagnostico:  "diagnostico",
        },
    ],          
};