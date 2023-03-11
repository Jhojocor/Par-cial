import './component/index.js'
import data from './component/data/data.js'
console.log(data);

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this.render();
    }
    render(){
        
        data.forEach((elem)=>{
            this.shadowRoot.innerHTML += `<app-destino destino="${elem.destino}"></app-destino>`
            this.shadowRoot.innerHTML += `<app-costo costo="${elem.costo}"></app-costo>`
            this.shadowRoot.innerHTML += `<app-duracionendias duracionEnDias="${elem.duracionEnDias}"></app-duracionendias>`
            this.shadowRoot.innerHTML += `<app-descripcion descripcion="${elem.descripcion}"></app-descripcion>`
            this.shadowRoot.innerHTML += `<app-actividades actividades="${elem.actividades}"></app-actividades>`
        })
    }
}

customElements.define('app-container', AppContainer)

