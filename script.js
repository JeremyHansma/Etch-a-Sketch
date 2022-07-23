const COLORS = [ 
    {
        color: "red",
    },{
        color: "blue",
    },{
        color: "green",
    }
]



function addGrid () {
    document.querySelectorAll('.grid-box').forEach(function (elem){
        elem.remove();
    })

    for(i = 0; i < 256; i++) {
        const div = document.querySelector('#grid')
        const grid = document.createElement('div')
        grid.classList.add('grid-box');
        div.append(grid)
    }
    document.getElementById('grid').style.width = `288px`
    document.getElementById('grid').style.height = `288px`
    document.getElementById('grid').style.gridTemplateColumns = `repeat(16, 2fr)`;
    document.getElementById('grid').style.gridTemplateRows = `repeat(16, 2fr)`;
}

addGrid();

userInput = () => {
    const input = document.getElementById('quantity').value
    return input;
}

resizeGrid = () => {
    const genNum = userInput();
    const numSqrd = genNum ** 2;

    document.querySelectorAll('.grid-box').forEach(function (elem){
        elem.remove();
    })
    const widthHeight = (16/genNum) *16;
    console.log(widthHeight);
    

    for (i = 0; i < numSqrd; i++) {
        const newDiv = document.querySelector('#grid')
        const newGrid = document.createElement('div')
        newGrid.classList.add('grid-box')
        newDiv.append(newGrid);
        
    }
    document.getElementById('grid').style.width = `${(256 + (genNum*2))}px`
    document.getElementById('grid').style.height = `${(256 + (genNum*2))}px`
    document.getElementById('grid').style.gridTemplateColumns = `repeat(${genNum}, 2fr)`;
    document.getElementById('grid').style.gridTemplateRows = `repeat( ${genNum}, 2fr)`;
    changeSize = () => {
        const nodeList = document.querySelectorAll('div.grid-box');
        for(let i = 0; i < nodeList.length; i++){
            let element = nodeList[i];
            element.style.width = `${widthHeight}px`;
            element.style.height = `${widthHeight}px`
        }
    }
    changeSize();
    
}


