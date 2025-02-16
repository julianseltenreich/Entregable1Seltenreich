const turnos = {
    lunes: ['9:00', '10:00', '11:00', '12:00'],
    martes:['9:00', '10:00', '11:00', '12:00'],
    miercoles: ['9:00', '10:00', '11:00', '12:00'],
    jueves: ['9:00', '10:00', '11:00', '12:00'],
    viernes: ['9:00', '10:00', '11:00', '12:00']
};
function paciente(){
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("ingrese su apellido: ");
    let dni = parseInt(prompt("Ingrese su numero de dni: "));
    
    return {nombre, apellido, dni}
    
}
            
function mostrarTurnos(turnos){
    

    let mensaje = "Los turnos disponibles son los siguientes:\n";

    for (const dia in turnos) {
        mensaje += `${dia}: ${turnos[dia].join(', ')}\n`;
    }

    alert(mensaje);
}

function reservarTurnos(turnos) {
    mostrarTurnos(turnos);
    let dia = prompt("Ingrese el día de la semana (lunes, martes, miercoles, jueves, viernes): ");
    let horario = prompt("Ingrese el turno deseado (9:00, 10:00, 11:00, 12:00): ");
    if (turnos[dia] && turnos[dia].includes(horario)) {
        alert(`Tu turno ha sido reservado para el día ${dia} a las ${horario}`);
    } else {
        alert("El turno solicitado no está disponible");
    }
    let indice = turnos[dia].indexOf(horario);
    if (indice !== -1) {
    turnos[dia].splice(indice, 1); 
    mostrarTurnos(turnos); 

    } else {
        alert("No se ha encontrado el turno en la lista");
     }
}

function cancelarTurno(turnos) {
    let opcion = prompt("seleccione una opcion:\n1. Cancelar turno\n2. Volver al menu principal")
    switch(opcion){
       case '1': 
          let dia = prompt("Ingrese el día del turno ha cancelar(lunes, martes, miercoles, jueves, viernes): ");
          let horario = prompt("Ingrese el horario de su turno"); 
          if (turnos[dia] && !turnos[dia].includes(horario)){
            alert(`El turno fue cancelado correctamente`);
            turnos[dia].push(horario);
            turnos[dia].sort();
          } else {
             alert(`El turno que intentas cancelar no esta agendado`);
     } 
         break;
       case '2':
        alert("Vuelva al menu principal");
        break;
       default:
        alert("Opcion invalida");
        break;
    }

    
    
}


function menu(){
    let pacienteInfo = paciente(); 
    let opcion;
    while(opcion !== '4'){
        opcion = prompt ("selecciona una opcion:\n1. Reservar turno\n2. Cancelar turno\n3. Ver turnos\n4. Salir")
        switch(opcion){
            case '1':
                reservarTurnos(turnos);
                break;
            case '2':
                cancelarTurno(turnos);
                break;
            case '3':
                mostrarTurnos(turnos);
                break;
            case '4':
                alert(`Gracias por usar nuestro sistema ${pacienteInfo.nombre} ${pacienteInfo.apellido}`);
                break;
            default:
                alert("Opcion invalida");
                break;
    }
}
}
menu();





