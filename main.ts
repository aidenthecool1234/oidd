player.onItemInteracted(STONE_SWORD, function () {
    blocks.place(LAVA, pos(0, 0, 0))
    mobs.spawn(PIG, pos(0, 0, 0))
    player.tell(mobs.target(MY_AGENT), "/kill @p")
    agent.collect(GOLD_INGOT)
    rollerCoasterBuilder.setRollerCoasterBaseBlock(GRASS)
    mobEvents.executeZombiePigmanCommand(mobEvents.createSelector(), mobEvents.ZombiePigman.BecomeAngry)
})
player.onChat("a.i.d.e.n p.l.a.y.s", function () {
    pixelArt.drawImage(img`
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 7 7 8 8 8 8 8 8 8 8 7 7 . . 
        . . 7 7 8 8 8 8 8 8 8 8 7 7 . . 
        . . 7 7 8 8 8 8 8 8 8 8 7 7 . . 
        . . . . 9 9 9 f f 9 9 9 . . . . 
        . . . . 9 9 9 f f 9 9 9 . . . . 
        . . . . 9 9 9 f f 9 9 9 . . . . 
        . . . . 9 9 9 f f 9 9 9 . . . . 
        . . . . 9 9 9 f f 9 9 9 . . . . 
        . . . . 9 9 9 f f 9 9 9 . . . . 
        `, pos(0, 0, 0), WEST)
    pixelArt.drawImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        d d . . . d d . d d d . . . . . 
        d . d . d . d . d . . . . . . . 
        d . . d . . d . d . . . . . . . 
        d . . . . . d . d d d . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, pos(0, 0, 0), WEST)
})
loops.forever(function () {
    mobEvents.executeWolfCommand(mobEvents.createSelector(), mobEvents.Wolf.BecomeTame)
})
music.playNote(262, Instrument.Pling, music.beat(BeatFraction.Sixteenth))
