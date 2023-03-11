class Costo extends HTMLElement{
    static get observedAttributes(){
        return["costo"];
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
            <p>${this.costo}</p>
        `
    }
}

customElements.define('app-costo', Costo)