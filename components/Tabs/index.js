// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {

    let topics = response.data.topics;

    topics.forEach(topic => {
      tabComponent(topic);
    });
  });

let topicsSection = document.querySelector(".topics");

function tabComponent(topic) {
  let tabDiv = document.createElement("div");
  tabDiv.classList.add("tab");
  tabDiv.textContent = topic;

  let reformatTopic = topic.split('.');
  reformatTopic = reformatTopic[0];
  tabDiv.setAttribute('data-show', reformatTopic);
  
  topicsSection.appendChild(tabDiv);
}