input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    led.plot(1, 2)
    led.plot(1, 1)
    led.plot(1, 3)
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . # .
            . . . # .
            . . . . .
            `)
    }
})
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
}
