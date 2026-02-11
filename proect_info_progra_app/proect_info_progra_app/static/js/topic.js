// Находим нужный div
const targetDiv = document.querySelector('#topic_text');

// Создаем экземпляр наблюдателя
const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        // Проверяем, были ли добавлены новые узлы (подтеги)
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            console.log('В диве появился новый элемент!');
            const string = topic1;
            console.log(string.slice(0, -1));
            // Здесь пишем ваше "делать то то"
            targetDiv.style.backgroundColor = 'lightgreen';
        }
    }
});

// Настраиваем, за чем именно следить (childList - это список дочерних элементов)
const config = { childList: true };

// Запускаем слежку
observer.observe(targetDiv, config);


// const string = topic1;
// console.log(string.slice(0, -1));