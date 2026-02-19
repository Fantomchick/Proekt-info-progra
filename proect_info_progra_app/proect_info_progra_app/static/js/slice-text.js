let topicText = document.getElementById('topic_text');
console.log(topicText.textContent.slice(44, -19));
let topicTextSliced = topicText.textContent.slice(44, -19);
topicText.innerHTML = topicTextSliced;