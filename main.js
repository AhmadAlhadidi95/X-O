let xPoints = document.querySelector(".x .points")
let oPoints = document.querySelector(".o .points")

let blocks = document.querySelectorAll("section span")

let theTurnIs = `X`

let borderArray = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
]

let theDraw = 0

blocks.forEach((b, i) => {

    b.addEventListener("click", () => {

        if (b.getAttribute("pos") == borderArray[i]) {
            
            b.innerHTML = theTurnIs

            borderArray[i] = theTurnIs

        }

        check(borderArray)

        theTurnIs == `X` ? theTurnIs = `O` : theTurnIs = `X`

        document.querySelector("header").textContent = `${theTurnIs} turn`

    })

})

function check(borders) {

    if (
        // Rows X
        (borders[0] == `X` && borders[1] == `X` && borders[2] == `X`) ||
        (borders[3] == `X` && borders[4] == `X` && borders[5] == `X`) ||
        (borders[6] == `X` && borders[7] == `X` && borders[8] == `X`) ||
        // Columns X
        (borders[0] == `X` && borders[3] == `X` && borders[6] == `X`) ||
        (borders[1] == `X` && borders[4] == `X` && borders[7] == `X`) ||
        (borders[2] == `X` && borders[5] == `X` && borders[8] == `X`) ||
        // Diagonal X
        (borders[0] == `X` && borders[4] == `X` && borders[8] == `X`) ||
        (borders[2] == `X` && borders[4] == `X` && borders[6] == `X`) ||

        // Rows O
        (borders[0] == `O` && borders[1] == `O` && borders[2] == `O`) ||
        (borders[3] == `O` && borders[4] == `O` && borders[5] == `O`) ||
        (borders[6] == `O` && borders[7] == `O` && borders[8] == `O`) ||
        // Columns O
        (borders[0] == `O` && borders[3] == `O` && borders[6] == `O`) ||
        (borders[1] == `O` && borders[4] == `O` && borders[7] == `O`) ||
        (borders[2] == `O` && borders[5] == `O` && borders[8] == `O`) ||
        // Diagonal O
        (borders[0] == `O` && borders[4] == `O` && borders[8] == `O`) ||
        (borders[2] == `O` && borders[4] == `O` && borders[6] == `O`)

    ) {
        
        swal.fire({

            imageUrl: "/images/won1.png",
            title: "Congratulation",
            text: `${theTurnIs} won!`,
            showConfirmButton: false,
            timer: 2000,

        })

        addPoint(theTurnIs)
        
        again()

    } else {
        theDraw += 1
    }

    for (const span of blocks) {

        if (span.textContent == `X` || span.textContent == `O`) {

            span.style.pointerEvents = "none"

        }
        
    }

    if (theDraw == borders.length) {

        swal.fire({
            imageUrl: "/images/equality.png", 
            title: "The draw", 
            text: `You're strong`, 
            showConfirmButton: false, 
            timer: 2000
        })

        again()

    }

}

function addPoint(theTurnIs) {

    theTurnIs == `X` ? xPoints.textContent = ++xPoints.textContent : oPoints.textContent = ++oPoints.textContent

}

function again() {

    borderArray = []

    theDraw = 0

    blocks.forEach((b, i) => {

        b.innerHTML = ``

        b.style.pointerEvents = "painted"

        borderArray.push(`${i += 1}`)

    })

}

document.querySelector("footer").addEventListener("click", () => {

    document.querySelector("header").textContent = `X turn`

    theTurnIs = `X`

    xPoints.textContent = `0`
    oPoints.textContent = `0`

    again()

})