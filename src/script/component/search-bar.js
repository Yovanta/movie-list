class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       .search-container {
            max-width: 900px;
            padding: 16px;
            border-radius: 5px;
            margin: 10px;
            justify-content: center;
       }
      
       .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-radius: 10px;
            font-weight: bold;
            background-color: #D5D5D5;
       }
      
       .search-container > input:focus {
           outline: 0;
       }
      
       .search-container > input:focus::placeholder {
           font-weight: bold;
       }
      
       .search-container >  input::placeholder {
           color: #053742;
           font-weight: normal;
       }
      
       .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #053742;
            color: white;
            border: 0;
            border-radius: 10px;
            text-transform: uppercase;
       }
      
       @media screen and (max-width: 550px){
           .search-container {
               flex-direction: column;
               position: static;
           }
      
           .search-container > input {
               width: 100%;
               margin-bottom: 12px;
           }
      
           .search-container > button {
               width: 100%;
           }
       }
       </style>
       <div id="search-container" class="search-container">
            <input placeholder="Search movie list" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);