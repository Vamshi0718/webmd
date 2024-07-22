const movie = {
    "title": "Inception",
    "director": "Christopher Nolan",
    "year": 2010,
    "genre": "Sci-Fi",
    "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
};

// Convert JSON object to string
const jsonString = JSON.stringify(movie);
console.log(jsonString);

// Parse JSON string back to object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.title);  // Output: Inception
