class Duracionendias extends HTMLElement{
    static get observedAttributes(){
        return["duracionendias"];
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
            <p>${this.duracionendias}</p>
        `
    }
}

customElements.define('app-duracionendias', Duracionendias)