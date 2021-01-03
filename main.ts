let derece = 0
basic.forever(function () {
    derece = input.compassHeading()
    if (derece < 45 || derece > 315) {
        basic.showString("K")
    } else if (derece < 135) {
        basic.showString("D")
    } else if (derece < 225) {
        basic.showString("G")
    } else {
        basic.showString("B")
    }
    basic.showNumber(derece)
})
