// Boburshoh Khusanov
const title = document.querySelector('#title'),
    author = document.querySelector('#author',),
    year = document.querySelector('#year'),
    btn = document.querySelector('.btn'),
    bookList = document.querySelector('#book-list');

btn.addEventListener('click',(event) =>{
    event.preventDefault()


    if(title.value == '' && author.value == '' && year.value ==''){
        alert('Toldiring')

    }
    else {
        const newRow = document.createElement('tr')

        const newTitle = document.createElement('th')
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle);

        const newAuter = document.createElement('th')
        newAuter.innerHTML = title.value
        newRow.appendChild(newAuter);

        const newYear = document.createElement('th')
        newYear.innerHTML = title.value
        newRow.appendChild(newYear);

        bookList.appendChild(newRow)

        title.value = ''
        author.value = ''
        year.value = ''





    }
} )


