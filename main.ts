input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    music.stopAllSounds()
})
music.playMelody("E B C5 A B G A F ", 120)
basic.forever(function () {
    basic.showIcon(IconNames.Square)
})
