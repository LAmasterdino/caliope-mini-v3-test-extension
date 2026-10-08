/**
 * LED-Blinken
 */
//% color="#0099FF" icon="\uf0eb" weight=100
namespace ledBlinken {
    /**
     * Lässt eine LED an einem Pin blinken.
     */
    //% block="LED an $pin blinken mit Intervall $intervall ms"
    //% pin.defl=DigitalPin.P0
    //% intervall.defl=500
    //% intervall.min=10 intervall.max=10000 intervall.step=10
    export function blinken(pin: DigitalPin, intervall: number): void {
        control.inBackground(function () {
            while (true) {
                pins.digitalWritePin(pin, 1)
                basic.pause(intervall / 2)

                pins.digitalWritePin(pin, 0)
                basic.pause(intervall / 2)
            }
        })
    }
}
