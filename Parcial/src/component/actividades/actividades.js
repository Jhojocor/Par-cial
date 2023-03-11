class Actividades extends HTMLElement{
    static get observedAttributes(){
        return["actividades"];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
            <p>${this.actividades}</p>
        `
    }
}

customElements.define('app-actividades', Actividades)