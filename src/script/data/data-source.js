class DataSource {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=3e8e576323d4c5157f17945d5f4c79aa&language=en-US&page=1&query=${keyword}&include_adult=false`)
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
}

export default DataSource;