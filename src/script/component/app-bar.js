class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
               display: block;
               position: fixed;
               top: 0;
               width: 100%;
               background-color: #9D84B7;
               color: white;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           :host a {
            font-size: 20px;
            font-weight: 400;
            text-decoration: none;
            color: white;
        }
        :host li {
            display: inline;
            list-style-type: none;
            margin-right: 50px;
        }
        :host a:hover,
        button:hover{
            font-weight: bold;
        }
        .flex-row-menu {
            justify-content: center;
            display: flex;
            margin: 0;
        }
        
        #home, 
        #about,
        #login{
            text-align: center;
            margin: 10px;
            padding: 10px;  
            margin-right: 40px;
        }
        #best button{
            cursor: pointer;
            margin: 10px;
            width: 100%;
            background-color: #053742;
            padding: 16px;
            color: white;
            border: 0;
            border-radius: 10px;
        }
        
        @media screen and (max-width: 700px) {
            #home, 
            #about,
            #login {
                margin-left: 2px;
                margin-right: 0;
            }
            #best button{
                padding: 14px;
            }
        }
       </style>
        <ul class="flex-row-menu">
            <li id="home"><a href="#">Home</a></li>
            <li id="about"><a href="#tentang">About</a></li>
            <li id="login"><a href="#login">Login</a></li>
            <li id="best"><a href="#best"><button>Best Movie</button></a></li>
        </ul>`;
    }
}

customElements.define("app-bar", AppBar);