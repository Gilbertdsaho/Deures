input.onButtonPressed(Button.A, function () {
    Parpadejar = true
})
input.onButtonPressed(Button.B, function () {
    Parpadejar = false
})
function Stop () {
    basic.clearScreen()
}
function parpadejar () {
    while (Parpadejar == true) {
        x = 2
        y = 2
        led.plot(x, y)
        basic.pause(100)
        led.unplot(x, y)
        basic.pause(100)
    }
    if (Parpadejar == false) {
        Stop()
    }
}
let y = 0
let x = 0
let Parpadejar = false
Parpadejar = false
basic.forever(function () {
    if (Parpadejar == true) {
        parpadejar()
    }
    if (Parpadejar == false) {
        Stop()
    }
})
