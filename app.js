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

            // Get details from launches
            const launchNames = launches.map(launch => launch.name);
            const launchDates = launches.map(launch => launch.date_local);
            const launchArticles = launches.map(launch => launch.links.article);
            const launchImages = launches.map(launch => launch.links.patch.small);
            // Loop over all launches
            for (i = 0; i < launches.length; i++){
                // Creates list element
                const listItem = document.createElement("li");
                // Creates html element for link
                const articleLink = document.createElement("a");
                // Sets link properties
                articleLink.href = launchArticles[i];
                articleLink.innerText = launchArticles[i];
                // Create image element 
                const image = document.createElement("img");
                // Set image properties
                image.src = launchImages[i];
                image.alt = launchNames[i];
                // Sets list item text
                listItem.innerText = launchNames[i] + ", " + launchDates[i] + ", ";
                // Append link and image to end of list item
                listItem.appendChild(articleLink);
                listItem.appendChild(image);
                // Append list item to list
                list.appendChild(listItem);
            }
            
        });
}
loadData();