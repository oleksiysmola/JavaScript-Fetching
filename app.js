// Initialise variable for launches
let launches = [];
const loadData = function(){
    // Retrieve data from API
    fetch("https://api.spacexdata.com/v5/launches")
        .then(result => result.json())
        .then(data => launches = data)
        .then(() => {console.log(launches)})
        .then(() => {
            // Obtain list element from html file
            const list = document.querySelector("#launch-list");

            // Get name and date of launch
            const launchNames = launches.map(launch => launch.name);
            const launchDates = launches.map(launch => launch.date_local);
            
            // Loop over all launches
            for (i = 0; i < launches.length; i++){
                const listItem = document.createElement("li");
                listItem.innerText = launchNames[i] + ": " + launchDates[i];
                list.appendChild(listItem);
            }
            
        });
}
loadData();