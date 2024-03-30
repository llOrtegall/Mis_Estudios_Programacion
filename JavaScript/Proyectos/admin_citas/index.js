// Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#nueva-cita');

// Event Listeners
pacienteInput.addEventListener('change', datosCitas);
propietarioInput.addEventListener('change', datosCitas);
emailInput.addEventListener('change', datosCitas);
fechaInput.addEventListener('change', datosCitas);
sintomasInput.addEventListener('change', datosCitas);

formulario.addEventListener('submit', nuevaCita);

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

function nuevaCita(ev){
  ev.preventDefault();

  // TODO: Validar data del formulario forma larga y está bien sin embargo se puede hacer de una forma más corta
  // const { email, fecha, paciente, sintomas, propietario } = citaObj;

  // if(email.trim() === '' || fecha.trim() === '' || paciente.trim() === '' || sintomas.trim() === '' || propietario.trim() === ''){
  //   console.log('Todos los campos son obligatorios');
  //   return;
  // }

  if(Object.values(citaObj).some(valor => valor.trim() === '') ){
    console.log('Todos los campos son obligatorios');
    return;
  }


  console.log('Enviando formulario...');
}