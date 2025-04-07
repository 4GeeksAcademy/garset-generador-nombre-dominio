import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

indow.onload = function() {
  
  const pronouns = ['el', 'la', 'nuestro', 'tu', 'mi', 'su'];
  const adjectives = ['grande', 'pequeño', 'rapido', 'lento', 'genial', 'increible'];
  const nouns = ['perro', 'gato', 'sitio', 'proyecto', 'negocio', 'idea'];
  const extensions = ['.com', '.net', '.io', '.dev', '.xyz', '.tech'];
  
  
  const generateBtn = document.getElementById('generateBtn');
  const domainInput = document.getElementById('domainInput');
  const domainResults = document.getElementById('domainResults');
  
 
  function generateDomains(keyword = '') {
    domainResults.innerHTML = ''; // Limpiar resultados anteriores
    
    let domains = [];
    
    
    for (let pronoun of pronouns) {
      for (let adj of adjectives) {
        for (let noun of nouns) {
          for (let ext of extensions) {
            
            let domain;
            if (keyword) {
              domain = `${keyword}${pronoun}${adj}${noun}${ext}`.toLowerCase();
            } else {
              domain = `${pronoun}${adj}${noun}${ext}`.toLowerCase();
            }
            domains.push(domain);
          }
        }
      }
    }
    
    
    domains = shuffleArray(domains).slice(0, 12);
    
    
    domains.forEach(domain => {
      const domainElement = document.createElement('div');
      domainElement.className = 'alert alert-info domain-item';
      domainElement.innerHTML = `
        ${domain} 
        <button class="btn btn-sm btn-success float-end copy-btn" data-domain="${domain}">
          <i class="far fa-copy"></i> Copiar
        </button>
      `;
      domainResults.appendChild(domainElement);
    });
    
    
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const domainToCopy = this.getAttribute('data-domain');
        navigator.clipboard.writeText(domainToCopy);
        this.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        setTimeout(() => {
          this.innerHTML = '<i class="far fa-copy"></i> Copiar';
        }, 2000);
      });
    });
  }
  
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
 
  generateBtn.addEventListener('click', function() {
    const keyword = domainInput.value.trim();
    generateDomains(keyword);
  });
  
  
  generateDomains();
};