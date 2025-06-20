const categoriesList = document.querySelectorAll('#categories .item');
console.log('Кількість категорій:',categoriesList.length);
categoriesList.forEach((item) => {
    const title = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll('ul li');
    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${elements.length}`);
})

