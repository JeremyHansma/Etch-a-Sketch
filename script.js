function addGrid () {
    document.querySelectorAll('.grid-box').forEach(function (elem){
        elem.remove();
    })

    for(i = 0; i < 256; i++) {
        const div = document.querySelector('#grid')
        const grid = document.createElement('div')
        grid.classList.add("grid-box");
        div.append(grid)
    }

    document.getElementById('grid').style.gridTemplateColumns = `repeat(16, 2fr)`;
    document.getElementById('grid').style.gridTemplateRows = `repeat(16, 2fr)`;
}

addGrid();

userInput = () => {
    const input = document.getElementById('quantity').value
    //console.log(input);
    return input;
}

resizeGrid = () => {
    const genNum = userInput();
    const numSqrd = genNum ** 2;
    console.log(numSqrd);

    document.querySelectorAll('.grid-box').forEach(function (elem){
        elem.remove();
    })

    for (i = 0; i < numSqrd; i++) {
        const newDiv = document.querySelector('#grid')
        const newGrid = document.createElement('div')
        newGrid.classList.add("grid-box") 
        newDiv.append(newGrid);
    }
    document.getElementById('grid').style.gridTemplateColumns = `repeat(${genNum}, 2fr)`;
    document.getElementById('grid').style.gridTemplateRows = `repeat(${genNum}), 2fr)`;
}

