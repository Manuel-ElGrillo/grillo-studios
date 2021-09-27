//Footer content

const url = document.createElement("a");
url.href = "https://deleonnet.com/contacto/";

const footer = document.querySelector(".footer");
footer.innerHTML = `<p>Página web realizada por <a href="${url}"> Manuel De León</a>. Todos los derechos reservados &copy;</p>`;

//Engineers content

const engineers = [
    {
        picture:"/assets/img/pictures/yo.jpg",
        name: "Manuel De León", 
        position1: "Ingeniero de Mezcla",
        position2: "Estudiante de Platzi",
        position3: "Web Master"
    },

    {
        picture:"/assets/img/pictures/ing1.jpg",
        name: "Sasha Deckard", 
        position1: "Ingeniero de Grabación",
        position2: "Ingeniero de Mezcla",
        position3: "Productora"
    },
    {
        picture:"/assets/img/pictures/ing2.jpg",
        name: "Richard Pérez", 
        position1: "Ingeniero de Mastering",
        position2: "Productor",
        position3: "Músico"
    },

    {
        picture:"/assets/img/pictures/ing3.jpg",
        name: "Roberto Aldebarán", 
        position1: "Pasante",
        position2: "Estudiandte de Ingeniería en Sonido",
        position3: "Músico"
    },

    {
        picture:"/assets/img/pictures/ing4.jpg",
        name: "David Hansen", 
        position1: "Ingeniero de Grabación",
        position2: "Editor",
        position3: "Arreglista"
    },

    {
        picture:"/assets/img/pictures/ing5.jpg",
        name: "Sofía Arianmne", 
        position1: "Ingeniero de Grabación",
        position2: "Ingeniero de Mastering",
        position3: "Profesora en Audioplace"
       },
];

const engineersContainer = document.querySelector(".engineer");

engineers.forEach((engineer) => {
    const divEngineer = document.createElement("div");
    divEngineer.innerHTML = `
            <img src=${engineer.picture}>
            <ul>
                <li>${engineer.name}</li>
                <li>${engineer.position1}</li>
                <li>${engineer.position2}</li>
                <li>${engineer.position3}</li>
            </ul>
    `;
    engineersContainer.appendChild(divEngineer);
});