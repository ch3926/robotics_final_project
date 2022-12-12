basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 100 && pins.analogReadPin(AnalogPin.P1) < 100 && pins.analogReadPin(AnalogPin.P2) < 100) {
        // if all pins are black 7 - stop car
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M1B,
        0
        )
    } else if (pins.analogReadPin(AnalogPin.P0) > 100 && pins.analogReadPin(AnalogPin.P1) > 100 && pins.analogReadPin(AnalogPin.P2) < 100) {
        // if only right pin is black 1 - avoid line
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M1B,
        0
        )
    } else if (pins.analogReadPin(AnalogPin.P0) > 100 && pins.analogReadPin(AnalogPin.P1) < 100 && pins.analogReadPin(AnalogPin.P2) > 100) {
        // if only mid pin is black 2 - follow line
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M1B,
        0
        )
    } else if (pins.analogReadPin(AnalogPin.P0) < 100 && pins.analogReadPin(AnalogPin.P1) > 100 && pins.analogReadPin(AnalogPin.P2) < 100) {
        // if both side pins are black 3 - Avoid Motion
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M1B,
        0
        )
    } else if (pins.analogReadPin(AnalogPin.P0) < 100 && pins.analogReadPin(AnalogPin.P1) > 100 && pins.analogReadPin(AnalogPin.P2) > 100) {
        // if only left pin is black 4 - Follow Motion
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M1B,
        0
        )
    } else {
    	
    }
})
