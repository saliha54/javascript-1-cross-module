// data (variables)
var project = { name:"Google", 
                link:"www.google.com",
                description: "Search motor" };


// functions
function print_deets(obj){
    for(let det in obj){
        console.log(obj[det]);
    }
}

// onclicks
var print_det = document.getElementById("print-details");
print_det.onclick = function() { print_deets(project); } 
                            
                          
