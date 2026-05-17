import {projects} from "./projects.js";

const projectsGrid = document.querySelector('.projects-grid');

projects.forEach((projects)=>{
    const card = document.createElement("div");

    card.classList.add("project-card");

    card.innerHTML = `
    <span>${projects.numero}</span>
    <h3>${projects.categoria}</h3>
    <p>${projects.titulo}</p>
    <p>${projects.descricao}</p>
    

    
    ${
        projects.reconhecimento ?
    `<small>RECONHECIMENTO</small>
    <p>${projects.reconhecimento}</p>`
    : ""
}

    ${
        projects.exploracao ?
        `<small>EXPLORAÇÕES</small>
        <p>${projects.exploracao}</p>
        `
        : ""
    }

    ${
        projects.contexto ?
        `<small>CONTEXTO</small>
        <p>${projects.contexto}</p>
        `
        : ""
    }

    ${
        projects.status ?
        `<small>STATUS</small>
        <p>${projects.status}</p>
        `
        : ""
    }

    ${
        projects.aprendizado ?
        `<small>APRENDIZADO</small>
        <p>${projects.aprendizado}</p>
        `
        : ""
    }

    <a href="/projects/${projects.id}.html">Ver Projeto</a>

    `;

    projectsGrid.appendChild(card)
})