// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    let articleObjects = response.data.articles;
    let articleArrays = Object.values(articleObjects);
    let articleTopics = Object.keys(articleObjects);

    let topicButtons = document.querySelectorAll(".tabs .topics div");
    topicButtons.forEach(item => {
      let data = item.getAttribute("data-show");
      item.addEventListener("click", () => dataClick(data));
    });

    articleArrays.forEach((array, index) => {
      array.forEach(article => {
        cardComponent(article, articleTopics[index]);
      });
    });
  });

let cardContainer = document.querySelector(".cards-container");

function cardComponent(article, topic) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.setAttribute("data-topic", topic);
  
    let headlineDiv = document.createElement("div");
    headlineDiv.classList.add("headline");
    headlineDiv.textContent = article.headline;
  
    let authorDiv = document.createElement("div");
    authorDiv.classList.add("author");
  
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("img-container");
  
    let authorImg = document.createElement("img");
    authorImg.src = article.authorPhoto;
  
    let authorNameSpan = document.createElement("span");
    authorNameSpan.textContent = article.authorName;
  
    imgDiv.appendChild(authorImg);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(authorNameSpan);
  
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
  
    cardContainer.appendChild(cardDiv);
  }
  