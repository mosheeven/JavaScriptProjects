// ShowsAPI is class that have a method that get a name of a movie and return the Array of 10 movies with 4 properties (name,id,description,score)
// There is also simple cache mechnizem that help to reduce the number API calls

class ShowsAPI {
    URL="http://api.tvmaze.com/search/shows?q=";
    cache = {};

    async fetchdata(query){
        if(!this.cache[query])
        {
            let response = await fetch(this.URL + query);
            let data = await response.json();
            let transformed = await data.map(item => {
                return {
                    id: item.show.id,
                    name: item.show.name,
                    description: item.show.summary,
                    score: item.score
        
                };
            }
            )   
            console.log("From API call")
            this.cache[query] = transformed;
            return transformed;
        }

        console.log("From Cache")
        return this.cache[query];
        
    }
}    

const show = new ShowsAPI();

async function getMovieData(query){
    let firstCall = await show.fetchdata(query)
    let secoundCall = await show.fetchdata(query)
    console.log(firstCall)
}
getMovieData('big')





