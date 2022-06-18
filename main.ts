input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
makerbit.onIrButton(IrButton.Any, IrButtonAction.Released, function () {
    if (makerbit.irButton() == LEFT || makerbit.irButton() == RIGHT) {
        SuperBit.MotorRun(SuperBit.enMotors.M2, 0)
        basic.showLeds(`
            # . . . .
            . . # . #
            # . # # .
            # . # . .
            # . # . .
            `)
    } else {
    	
    }
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
        SuperBit.MotorRun(SuperBit.enMotors.M1, 99)
    } else if (makerbit.irButton() == DOWN) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . # # # .
            . . # . .
            . . . . .
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M1, -99)
    } else if (makerbit.irButton() == LEFT) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . # # # .
            . . # # .
            . . . # .
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M2, -80)
    } else if (makerbit.irButton() == RIGHT) {
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M2, 80)
    } else if (makerbit.irButton() == ANTICLOCK) {
        basic.showLeds(`
            # . # # .
            # # . . #
            # # # . #
            . . . . #
            . . # # .
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 99)
    } else if (makerbit.irButton() == CLOCK) {
    	
    } else if (makerbit.irButton() == PLUS) {
        basic.showString("+")
        SuperBit.MotorRun(SuperBit.enMotors.M4, 99)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . # . #
            . . # # .
            . . # # #
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M3, -99)
    } else if (makerbit.irButton() == MINUS) {
        basic.showString("-")
        SuperBit.MotorRun(SuperBit.enMotors.M4, -99)
    } else if (makerbit.irButton() == SPEAKER) {
        SuperBit.MotorStopAll()
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
let MINUS = 0
let PLUS = 0
let CLOCK = 0
let DOWN = 0
let ANTICLOCK = 0
let RIGHT = 0
let SPEAKER = 0
let LEFT = 0
let UP = 0
makerbit.connectIrReceiver(DigitalPin.P1, IrProtocol.Keyestudio)
let POWER = 0
UP = 128
let BULB = 64
LEFT = 32
SPEAKER = 160
RIGHT = 96
ANTICLOCK = 16
DOWN = 144
CLOCK = 80
PLUS = 48
let B0 = 176
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
basic.showLeds(`
    # . . . .
    . . # . #
    # . # # .
    # . # . .
    # . # . .
    `)
