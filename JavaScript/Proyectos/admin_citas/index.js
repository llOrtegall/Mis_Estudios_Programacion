// Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

// Event Listeners
pacienteInput.addEventListener('change', datosCitas);
propietarioInput.addEventListener('change', datosCitas);
emailInput.addEventListener('change', datosCitas);
fechaInput.addEventListener('change', datosCitas);
sintomasInput.addEventListener('change', datosCitas);


// Objecto con la información de la cita
const citaObj = {
  email: '',
  fecha: '',
  paciente: '',
  sintomas: '',
  propietario: ''
}

// Funciones
function datosCitas(ev){
  citaObj[ev.target.name] = ev.target.value;
  console.log(citaObj);
}