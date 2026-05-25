import { projects } from "./projects.js";

const projectsGrid = document.querySelector(".projects-grid");

projects.forEach((project) => {
  const card = document.createElement("div");

  card.classList.add("project-card");

  card.innerHTML = `
  <span>${project.numero}</span>  
    <div class="card-head">
    <h3>${project.categoria}</h3>
    </div>
    <div class="card-title">
    <p>${project.titulo}</p>
    </div>
    <div class="card-tag desc">
    <small>DESCRIÇÃO</SMALL>
    <p>${project.descricao}</p>
    </div>    

    
    ${
      project.reconhecimento
        ? 
        `<div class="card-tag">
        <small>RECONHECIMENTO</small>
        <p>${project.reconhecimento}</p> 
        </div>`
        : ""
    }

    ${
      project.exploracao
        ? 
        `<div class="card-tag">
        <small>EXPLORAÇÕES</small>
        <p>${project.exploracao}</p>
        </div>
        `
        : ""
    }

    ${
      project.contexto
        ? 
        `<div class="card-tag">
        <small>CONTEXTO</small>
        <p>${project.contexto}</p>
        </div>`
        : ""
    }

    ${
      project.status
        ? 
        `<div class="card-tag">
        <small>STATUS</small>
        <p>${project.status}</p>
        </div>`
        : ""
    }

    ${
      project.aprendizado
        ? 
        `<div class="card-tag">
        <small>APRENDIZADO</small>
        <p>${project.aprendizado}</p>
        </div>`
        : ""
    }
    <div class="btn">
    <a  href="/projects/${project.id}.html">Ver Projeto</a>
    </div>
    `;

  projectsGrid.appendChild(card);
});
