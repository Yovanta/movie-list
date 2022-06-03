class MovieItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie) {
        this._movie = movie;
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
                background: #bdc3c7;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to bottom, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to bottom, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
                cursor: pointer;
               }
               
               .flex-movie-row{
                display: flex;
                }
              
               :host .image-movie {
                width: 100%;
                max-height: 400px;
                object-fit: cover;
                object-position: center;
               }
              
               .movie-info {
                   padding: 24px;
                   margin-top: 5%;
               }
              
               .movie-info > h2 {
                font-weight: lighter;
                color: white;
                text-transform: uppercase;
                font-weight: 1000;
               }

               .movie-info > h2:hover {
                text-decoration: underline;
            }
              
               .movie-info > p {
                font-style: italic;
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10;    
            }

            @media screen and (max-width: 750px) {
                .flex-movie-row {
                    flex-direction: column;
                }
                .movie .image-movie {
                    max-height: 700px;
                }
            }
           </style>
             <div class="flex-movie-row">
                <img class="image-movie" src="https://image.tmdb.org/t/p/original${this._movie.backdrop_path}" alt="image">
                <div class="movie-info">
                    <h2>${this._movie.original_title}</h2>
                    <h5>Relase Date : ${this._movie.release_date}</h5>
                    <h5>Rate : ${this._movie.vote_average}</h5>
                    <h5> Popularity : ${this._movie.popularity}</h6>
                    <p>${this._movie.overview}</p>
                </div>
            </div>`;
    }
}

customElements.define("movie-item", MovieItem);