const socket = io();

socket.on('message', message => {
    console.log(message);
});

// Constructing board

const range = (start, stop) => Array.from({length: stop - start + 1}, (_, i) => start + i);

const boardProperties = {
    rows: range(1, 8).reverse(),
    cols: range('A'.charCodeAt(0), 'H'.charCodeAt(0)).map(v => String.fromCharCode(v)),
    colors: {
        light: '#FFE28A',
        dark: '#8F7700'
    }
}

const pieces = {
    king: {
        imgWhite: './images/Chess_klt45.svg',
        imgBlack: './images/Chess_kdt45.svg'
    },
    queen: {
        imgWhite: './images/Chess_qlt45.svg',
        imgBlack: './images/Chess_qdt45.svg'
    },
    rook: {
        imgWhite: './images/Chess_rlt45.svg',
        imgBlack: './images/Chess_rdt45.svg'
    },
    bishop: {
        imgWhite: './images/Chess_blt45.svg',
        imgBlack: './images/Chess_bdt45.svg'
    },
    knight: {
        imgWhite: './images/Chess_nlt45.svg',
        imgBlack: './images/Chess_ndt45.svg'
    },
    pawn: {
        imgWhite: './images/Chess_plt45.svg',
        imgBlack: './images/Chess_pdt45.svg'
    }
}

const board = document.querySelector('.board');

let colorToggle = false;

for (const row of boardProperties.rows) {
    const tr = document.createElement('tr');
    for (const col of boardProperties.cols) {
        const td = document.createElement('td');
        const color = colorToggle ? boardProperties.colors.dark: boardProperties.colors.light;
        td.style.backgroundColor = color;
        colorToggle = !colorToggle;
        td.classList.add(col + row);
        tr.appendChild(td);
    }
    colorToggle = !colorToggle;
    board.appendChild(tr);
}

