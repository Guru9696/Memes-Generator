let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");
let url = "https://api.imgflip.com/get_memes";

// Function to get a random meme template
let getMeme = () => {
    // Fetch data from the Imgflip API
    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            if (data.success) {
                // Get a random meme template from the response
                let memes = data.data.memes;
                let randomMeme = memes[Math.floor(Math.random() * memes.length)];
                
                // Display the meme
                meme.src = randomMeme.url;
                title.innerHTML = randomMeme.name;
            } else {
                console.error("Failed to fetch meme templates");
            }
        })
        .catch((error) => {
            console.error("Error fetching meme: ", error);
        });
};

// Call the getMeme() function on button click and window load
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
