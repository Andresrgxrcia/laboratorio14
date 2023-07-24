var formulariodoc=document.getElementById("doctores")
var formulariopac=document.getElementById("pacientes")
var doctorform=document.getElementById('doctorform')
var pacform=document.getElementById('pacform')
var doc=document.getElementById("doc")
var pac=document.getElementById("pac")
let doctores=[]
let pacientes=[]

doc.addEventListener('click',()=>{
    formulariodoc.classList.toggle('shows');

    let height=0
    if(formulariodoc.clientHeight=="0"){
        height=formulariodoc.scrollHeight
    }
    formulariodoc.style.height='${height}px'
})
pac.addEventListener('click',()=>{
    formulariopac.classList.toggle('shows');

    let height=0
    if(formulariopac.clientHeight=="0"){
        height=formulariodoc.scrollHeight
    }
    formulariopac.style.height='${height}px'
})
formulariodoc.addEventListener('submit',regristrardoctor)
formulariopac.addEventListener('submit',regristrapaciente)

function regristrardoctor(event){
    event.preventDefault()
    const nombredoc=document.getElementById("nombredoc").value
    const apellidodoc=document.getElementById("apellidodoc").value
    const ceduladoc=document.getElementById("ceduladoc").value
    const especialidaddoc=document.getElementById("especialidaddoc").value
    const consultoriodoc=document.getElementById("consultoriodoc").value
    const emaildoc=document.getElementById("emaildoctor").value
    const val_email=/[@.]/.test(emaildoc)
    if(!val_email){
        alert("El correo no es válido")
    }
    const doctor={
        Nombre:nombredoc,
        Apellido:apellidodoc,
        Cédula:ceduladoc,
        Especialidad:especialidaddoc,
        Consultorio:consultoriodoc,
        Email:emaildoc
    }
    doctores.push(doctor)
    doctorform.reset()
    var doctoresjson= JSON.stringify(doctores)
    console.log(doctoresjson)

    //Mostrar doctores
    var tablas=document.getElementById("tbody")
    var tabla=tablas.querySelector('tbody')
    tablas.innerHTML=""
    
    doctores.forEach((doctor) => {
        const tuplas=tablas.insertRow(-1)
        const nombredoc1=document.createElement('td')
        const apellidodoc1=document.createElement('td')
        const ceduladoc1=document.createElement('td')
        const especialidaddoc1=document.createElement('td')
        const consultoriodoc1=document.createElement('td')
        const emaildoc1=document.createElement('td')

        nombredoc1.textContent=doctor.Nombre
        apellidodoc1.textContent=doctor.Apellido
        ceduladoc1.textContent=doctor.Cédula
        especialidaddoc1.textContent=doctor.Especialidad
        consultoriodoc1.textContent=doctor.Consultorio
        emaildoc1.textContent=doctor.Email

        tuplas.appendChild(nombredoc1)
        tuplas.appendChild(apellidodoc1)
        tuplas.appendChild(ceduladoc1)
        tuplas.appendChild(especialidaddoc1)
        tuplas.appendChild(consultoriodoc1)
        tuplas.appendChild(emaildoc1)
    
    })
}
function regristrapaciente(event){
    event.preventDefault()
    const nombrepac=document.getElementById("nombrepac").value
    const apellidopac=document.getElementById("apellidopac").value
    const edadpac=document.getElementById("edadpac").value
    const telefonopac=document.getElementById("telefonopac").value
    const especialidadpac=document.getElementById("especialidadpac").value
    const paciente={
        Nombre:nombrepac,
        Apellido:apellidopac,
        Edad:edadpac,
        Especialidad:especialidadpac,
        Teléfono:telefonopac,
    }
    pacientes.push(paciente)
    var pacientesJSON= JSON.stringify(pacientes)
    console.log(pacientesJSON)

    var tablab=document.getElementById("tbody2")
    var tabla2=tablab.querySelector('tbody')
    tablab.innerHTML=""
    
    pacientes.forEach((paciente) => {
        const registros=tablab.insertRow(-1)
        const nombrepac1=document.createElement('td')
        const apellidopac1=document.createElement('td')
        const edadpac1=document.createElement('td')
        const especialidadpac1=document.createElement('td')
        const telefonopac1=document.createElement('td')

        nombrepac1.textContent=paciente.Nombre
        apellidopac1.textContent=paciente.Apellido
        telefonopac1.textContent=paciente.Teléfono
        edadpac1.textContent=paciente.Edad
        especialidadpac1.textContent=paciente.Especialidad

        registros.appendChild(nombrepac1)
        registros.appendChild(apellidopac1)
        registros.appendChild(edadpac1)
        registros.appendChild(telefonopac1)
        registros.appendChild(especialidadpac1)
    
    })
}
console.log(doctores)
console.log(pacientes)