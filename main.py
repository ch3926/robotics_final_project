def on_forever():
    if pins.analog_read_pin(AnalogPin.P0) < 100 and pins.analog_read_pin(AnalogPin.P1) < 100 and pins.analog_read_pin(AnalogPin.P2) < 100:
        # if all pins are black 7 - stop car
        robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M1B, 0)
    elif pins.analog_read_pin(AnalogPin.P0) > 100 and pins.analog_read_pin(AnalogPin.P1) > 100 and pins.analog_read_pin(AnalogPin.P2) < 100:
        # if only right pin is black 1 - avoid line
        robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M1B, 0)
    elif pins.analog_read_pin(AnalogPin.P0) > 100 and pins.analog_read_pin(AnalogPin.P1) < 100 and pins.analog_read_pin(AnalogPin.P2) > 100:
        # if only mid pin is black 2 - follow line
        robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M1B, 0)
    elif pins.analog_read_pin(AnalogPin.P0) < 100 and pins.analog_read_pin(AnalogPin.P1) > 100 and pins.analog_read_pin(AnalogPin.P2) < 100:
        # if both side pins are black 3 - Avoid Motion
        robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M1B, 0)
    elif pins.analog_read_pin(AnalogPin.P0) < 100 and pins.analog_read_pin(AnalogPin.P1) > 100 and pins.analog_read_pin(AnalogPin.P2) > 100:
        # if only left pin is black 4 - Follow Motion
        robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M1B, 0)
    else:
        pass
basic.forever(on_forever)
