input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    servos.P2.setAngle(90)
    servos.P1.setAngle(60)
    basic.pause(500)
    servos.P2.setAngle(0)
    servos.P1.setAngle(0)
    basic.pause(500)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(3)
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showIcon(IconNames.Heart)
    game.pause()
    game.resume()
    music.playMelody("A - B F - C5 A D ", 120)
})
music.playTone(784, music.beat(BeatFraction.Whole))
servos.P1.setAngle(0)
servos.P2.setAngle(90)
