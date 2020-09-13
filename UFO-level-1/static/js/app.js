// from data.js
var tableData = data;

// YOUR CODE HERE!

//instantiating variables
var $tbody = document.querySelector("tbody");
var $date = document.querySelector("#datetime");
var $search = document.querySelector("#search");
var $reset = document.querySelector("#reset");

//search then reset after done 
$search.addEventListener("click", searchButton);
$reset.addEventListener("click", reset);

function displayTable(){
    $tbody.innerHTML = "";
    
    //iterate through table and retrieve object index
    for (var i = 0;i< tableData.length;i++){
        var val = tableData[i]
        var key = Object.keys(val);
        
        //then insert a new row 
        var $row = $tbody.insertRow(i)
        for (var l = 0; l < key.length; l++){
            var k = key[l];

            //create new slot to enter value 
            var $slot = $row.insertCell[l];
            $slot.innerText = val[k]
        }
    }
}

//code for filter search button 
function searchButton(){
    var filter =  $date.value;
    if (filter != ""){
        tableData = data.filter(function (val){
            var valDate = val.datetime;
            return addressDate ===filter;
        });
    }else {
        tableData
    };
    displayTable();
}

//code to reset 
function reset(){
    displayTable();
}

displayTable();