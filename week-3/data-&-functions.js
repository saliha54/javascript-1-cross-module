/*   data (variables)   */
var project = { name:"Google", 
                link:"www.google.com",
                description: "Search motor" };


// functions
function print_deets(obj){
    for(let det in obj){
        console.log(`${det} is ${obj[det]}`);
    }
}
            