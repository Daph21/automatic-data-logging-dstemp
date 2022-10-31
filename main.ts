datalogger.onLogFull(function () {
    logging = false
    basic.showIcon(IconNames.Skull)
})
input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.No)
        datalogger.deleteLog()
        logging = false
        datalogger.setColumnTitles(
        "Temperature",
        "Lum"
        )
    }
})
let logging = false
logging = false
datalogger.setColumnTitles(
"Temperature",
"Lum"
)
loops.everyInterval(1000, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("Temperature", dstemp.celsius(DigitalPin.P0)),
        datalogger.createCV("Lum", input.lightLevel())
        )
    }
})
