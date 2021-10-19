makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Pressed, function () {
	
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
makerbit.onIrButton(IrButton.Any, IrButtonAction.Released, function () {
    if (makerbit.irButton() == DOWN) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (makerbit.irButton() == B0) {
        basic.showNumber(0)
    } else if (makerbit.irButton() == CLOCK) {
        basic.showLeds(`
            . # # . #
            # . . # #
            # . # # #
            # . . . .
            . # # . .
            `)
    } else if (makerbit.irButton() == MINUS) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    if (makerbit.irButton() == UP) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . . . . .
            `)
    } else if (makerbit.irButton() == SPEAKER) {
        basic.showLeds(`
            . # . # .
            # # . . #
            # # # . #
            # # . . #
            . # . # .
            `)
    } else if (makerbit.irButton() == ANTICLOCK) {
        basic.showLeds(`
            # . # # .
            # # . . #
            # # # . #
            . . . . #
            . . # # .
            `)
    } else if (makerbit.irButton() == PLUS) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . #
            `)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
})
let MINUS = 0
let B0 = 0
let PLUS = 0
let CLOCK = 0
let DOWN = 0
let ANTICLOCK = 0
let SPEAKER = 0
let UP = 0
makerbit.connectIrReceiver(DigitalPin.P1, IrProtocol.Keyestudio)
let POWER = 0
UP = 128
let BULB = 64
let LEFT = 32
SPEAKER = 160
let RIGHT = 96
ANTICLOCK = 16
DOWN = 144
CLOCK = 80
PLUS = 48
B0 = 176
MINUS = 112
let B1 = 8
let B2 = 136
let B3 = 72
let B4 = 40
let B5 = 168
let B6 = 104
let B7 = 24
let B8 = 152
let B9 = 88
