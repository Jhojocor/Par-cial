class Destino extends HTMLElement{
    static get observedAttributes(){
        return["destino"];
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
            <p>${this.destino}</p>
        `
    }
}

customElements.define('app-destino', Destino)