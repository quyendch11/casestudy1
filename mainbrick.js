let brick_layout = [
    [
        [
            [0, 1, 1],
            [0, 0, 0],
            [1, 1, 1],
        ],
        [
            [1, 0, 0],
            [1, 0, 1],
            [1, 0, 1],
        ],
        [
            [1, 1, 1],
            [0, 0, 0],
            [1, 1, 0],
        ],
        [
            [1, 0, 1],
            [1, 0, 1],
            [0, 0, 1],
        ],
    ],
    [
        [
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 0],
        ],
        [
            [1, 1, 1],
            [0, 0, 0],
            [0, 1, 1],
        ],
        [
            [0, 0, 1],
            [1, 0, 1],
            [1, 0, 1],
        ],
        [
            [1, 1, 0],
            [0, 0, 0],
            [1, 1, 1],
        ],
    ],
    [
        [
            [0, 1, 1],
            [0, 0, 1],
            [1, 0, 1],
        ],
        [
            [1, 0, 0],
            [0, 0, 1],
            [1, 1, 1],
        ],
        [
            [1, 0, 1],
            [1, 0, 0],
            [1, 1, 0],
        ],
        [
            [1, 1, 1],
            [1, 0, 0],
            [0, 0, 1],
        ],
    ],
    [
        [
            [1, 0, 1],
            [0, 0, 1],
            [0, 1, 1],
        ],
        [
            [0, 0, 1],
            [1, 0, 0],
            [1, 1, 1],
        ],
        [
            [1, 1, 0],
            [1, 0, 0],
            [1, 0, 1],
        ],
        [
            [1, 1, 1],
            [0, 0, 1],
            [1, 0, 0],
        ],
    ],
    [
        [
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
        ],
        [
            [1, 1, 0, 1],
            [1, 1, 0, 1],
            [1, 1, 0, 1],
            [1, 1, 0, 1],
        ],
        [
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
        ],
        [
            [1, 0, 1, 1],
            [1, 0, 1, 1],
            [1, 0, 1, 1],
            [1, 0, 1, 1],
        ],
    ],
    [
        [
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1],
        ],
    ],
    [
        [
            [1, 0, 1],
            [0, 0, 0],
            [1, 1, 1],
        ],
        [
            [1, 0, 1],
            [1, 0, 0],
            [1, 0, 1],
        ],
        [
            [1, 1, 1],
            [0, 0, 0],
            [1, 0, 1],
        ],
        [
            [1, 0, 1],
            [0, 0, 1],
            [1, 0, 1],
        ],
    ],
]
function generateNewBrick() {
    brick = new Brick(Math.floor(Math.random()*10) % brick_layout.length);
}
