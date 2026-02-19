let topicText = document.getElementById('topic_text');
console.log(topicText.textContent.slice(45, -21));
let topicTextSliced = topicText.textContent.slice(45, -21);
topicText.innerHTML = topicTextSliced;