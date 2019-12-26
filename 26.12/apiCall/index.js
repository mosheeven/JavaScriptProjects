// class ShowsAPI {
//     URL="http://api.tvmaze.com/search/shows?q=american";
    




// }

async fetchdata(query){
    let URL="http://api.tvmaze.com/search/shows?q=american"
    let data = fetch(URL).then(response => response.json()).then(data => console.log(data))

}




// 1. The data should be transformed to 

// [{
//     id: ''
//     title: '',
//     description: '',
//     score: x
// }]

// 2. Cache the results

// 3. Debounce the requests