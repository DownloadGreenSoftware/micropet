input.onGesture(Gesture.EightG, function () {
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        . . . . .
        . # # # .
        `)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    soundExpression.giggle.play()
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # # . # #
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            `)
    }
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        . . . . .
        . # # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    for (let index = 0; index < randint(0, 10); index++) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        . . . . .
        . # # # .
        `)
    soundExpression.happy.play()
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        . . . . .
        . # # # .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        . # # # .
        `)
})
input.onGesture(Gesture.SixG, function () {
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        . . . . .
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    if (Sleepy == false) {
        Sleepy = true
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            . # # # .
            `)
    } else {
        control.reset()
    }
})
input.onGesture(Gesture.Shake, function () {
    soundExpression.mysterious.play()
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # #
            # # . . #
            . . . . .
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            # # . . #
            # . . # #
            . . . . .
            # . # . #
            . # . # .
            `)
    }
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        . . . . .
        . # # # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    soundExpression.slide.play()
    basic.showLeds(`
        # . . . #
        # # . # #
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(5000)
    basic.showLeds(`
        # . . . #
        # # . # #
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        . . . . .
        . # # # .
        `)
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        . . . . .
        . # # # .
        `)
})
let Sleepy = false
Sleepy = false
soundExpression.yawn.play()
basic.showLeds(`
    . . . . .
    # # . # #
    . . . . .
    . . . . .
    . # # # .
    `)
basic.showLeds(`
    . # . # .
    # . . . #
    . . . . .
    . . . . .
    . # # # .
    `)
basic.showLeds(`
    # # . # #
    # . . . #
    . . . . .
    . . . . .
    . # # # .
    `)
