class ApiCall{
    URL: string = "http://api.tvmaze.com/search/shows?q=";
    cache: any = {};
    async fetchData(query: string){

        if(this.cache[query]){
            return this.cache[query];
        }

        let fullquery: string = this.URL + query;
        const response = await fetch(fullquery)
        const data: [] = await response.json();
        const tranformed = data.map((item: any) => { return {
            name: <String> item.show.name,
            id: <number> item.show.id,
            description: <String> item.show.summary

        }});

        this.cache = {query : tranformed}
        console.log(tranformed);

    };

}

const sampleCall = new ApiCall();
sampleCall.fetchData("love");


// 2. Cache the results

// 3. Debounce the requests