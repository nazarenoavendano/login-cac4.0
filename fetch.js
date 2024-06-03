const btn = document.querySelector('.btn')
const div = document.querySelector('.contenidoApi')
const url = 'https://randomuser.me/api/?results=20'

fetch(url)
.then((res)=>res.json())
.then((datos)=>{

    //console.log(datos.results)

    datos.results.forEach((elementos) => {
        const divartificial = document.createElement("div")

        divartificial.innerHTML = `
            <h3>${elementos.name.first}</h3>
            <h4>${elementos.email}</h4>
            <img src="${elementos.picture.large}">
        `
        div.append(divartificial)
    });

})
