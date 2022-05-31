input.onButtonPressed(Button.A, function () {
    numero += -1
})
input.onGesture(Gesture.Shake, function () {
    segredo = randint(0, 9)
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    numero = inicial
})
input.onButtonPressed(Button.AB, function () {
    if (numero == segredo) {
        basic.showIcon(IconNames.Yes)
    } else if (numero < segredo) {
        basic.showString(">")
    } else {
        basic.showString("<")
    }
})
input.onButtonPressed(Button.B, function () {
    numero += 1
})
let segredo = 0
let numero = 0
let inicial = 0
inicial = 5
numero = inicial
segredo = randint(0, 9)
basic.forever(function () {
    basic.showNumber(numero)
})
