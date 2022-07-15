function addGrid () {
    const div = document.querySelector('#grid')
    //const grid = document.createElement('div')
    for(let i = 0; i < 256; i++) {
        const grid = document.createElement('div')
        grid.classList.add('grid-box')
        div.append(grid)
    }
}

addGrid();

function colorChange() {
    const gridBox = document.querySelector('.grid-box')
    const box = document.createAttribute('title', 'color')

    gridBox.append(box);
}