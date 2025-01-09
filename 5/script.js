// Base URL
const apiUrl = "https://api.example.com/data";

// Function to make a GET request using
// TODO: 1. find the error and fix it, 2. finish the function
function fetchData(url) {
  fetch(url)
    .then((response) => {
      // Check if the response is NOT OK
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); 
    })
    .then((data) => {
      console.log("Fetched data:", data); //Log the fetched data to the console
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message); // Log any errors to that occur      
    });
}

fetchData(apiUrl);

// Function to make a POST request
// TODO: Implement the function
function postData(url, data) {
  fetch(url, {
    method: "POST", // Specify the HTTP method as POST
    headers: {
      "Content-Type": "application/json", //Set the request headers
    },
    body: JSON.stringify(data), //
  })
    .then((response) => {
      // Check if the response is not OK
      if (!response.ok) {
        throw new Error("Failed to post data: " + response.statusText);
      }
      return response.json(); // Parse the response as JSON
    })
    .then((result) => {
      console.log("Post successful:", result); // Log the server's response      
    })
    .catch((error) => {
      console.error("Error posting data:", error.message); // Log any erros that occur      
    });
}

// Data object to be sent in the POST request
const dataToPost = {
  name: "John Doe",
  age: 21,
};

postData(apiUrl, dataToPost);
