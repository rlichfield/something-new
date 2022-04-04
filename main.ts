input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    music.stopAllSounds()
})
basic.showIcon(IconNames.Square)
basic.forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
