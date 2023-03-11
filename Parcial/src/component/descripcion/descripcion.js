class Descripcion extends HTMLElement{
    static get observedAttributes(){
        return["descripcion"];
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
            <p>${this.descripcion}</p>
        `
    }
}

customElements.define('app-descripcion', Descripcion)