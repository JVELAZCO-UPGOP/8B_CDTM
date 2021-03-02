const listaMascotas= document.getElementById('Lista-mascotas');
const tipo= document.getElementById('tipo');
const nombre= document.getElementById('nombre');
const dueno= document.getElementById('dueno');
const form= document.getElementById('form');
const btn_guardar= document.getElementById('btn_guardar');
const btn_cancelar= document.getElementById('btn_cancelar');
const indice=document.getElementById('indice');
const tituloModal= document.getElementById('exampleModalCenterTitle');
const btn_closeModal= document.getElementById('closeModal');
const btn_eliminar=document.getElementById('btn_eliminar');
let mascotas=[
   
];
function listarMascotas()
{
    let htmlMascotas=mascotas.map((mascota, index)=>` <tr>
    <th scope="row">${index}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.dueno}</td>
    <td>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-info editar"><i class="fas fa-edit" data-toggle="modal" data-target="#exampleModalCenter"></i></button>
        <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"  data-toggle="modal" data-target="#modalEliminar"></i></button>
      </div>
  </td>
  </tr>`).join("");
  listaMascotas.innerHTML=htmlMascotas;
  Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick=editar(index));
  Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index)=>botonEliminar.onclick=eliminar(index));
}
function enviarDatos(evento)
{
  evento.preventDefault();
  const datos=
 {
  tipo: tipo.value,
  nombre: nombre.value,
  dueno: dueno.value
 };
  const accion=btn_guardar.innerHTML;
  switch(accion)
  {
    case 'Editar':
      mascotas[indice.value]=datos;
      break;
    default:
      mascotas.push(datos);
      break;  
  }
listarMascotas();
resetModal();
}
function editar(index)
{
  return function cuandoDoyClick(){
  tituloModal.innerHTML='Editar Mascota'
  btn_guardar.innerHTML='Editar';
  $('#exampleModalCenter').modal('toggle')
  const mascota=mascotas[index];
  nombre.value=mascota.nombre;
  dueno.value=mascota.dueno;
  tipo.value=mascota.tipo;
  indice.value=index;
  }
}
function resetModal()
{
  nombre.value='';
  dueno.value='Dueño';
  tipo.value='Tipo de animal';
  indice.value='';
  btn_guardar.innerHTML='Guardar'
  tituloModal.innerHTML='Nueva Mascota'
}
function eliminar(index)
{
  return function clickEliminar()
  {
    $('#modalEliminar').modal('toggle')
    mascotas=mascotas.filter((mascota, indiceMascota)=>indiceMascota !== index);
    listarMascotas();  
  }
}
listarMascotas();
form.onsubmit=enviarDatos;
btn_guardar.onclick=enviarDatos;
btn_cancelar.onclick= resetModal;
btn_closeModal.onclick=resetModal;

