info.onCountdownEnd(function () {
    if (info.score() < 7) {
        game.gameOver(false)
        game.setGameOverMessage(false, "You lose...")
    } else {
        if (info.score() >= 7) {
            game.gameOver(true)
            game.setGameOverMessage(true, "You win!")
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    mySprite2.setPosition(randint(100, -100), randint(110, -110))
    mySprite2.setStayInScreen(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite.setPosition(randint(100, -100), randint(110, -110))
    mySprite.setStayInScreen(true)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
info.startCountdown(13)
scene.setBackgroundImage(assets.image`sea`)
mySprite = sprites.create(img`
    ...........fffffff...ccfff..........
    ..........fbbbbbbbffcbbbbf..........
    ..........fbb111bbbbbffbf...........
    ..........fb11111ffbbbbff...........
    ..........f1cccc1ffbbbbbcff.........
    ..........ffc1c1c1bbcbcbcccf........
    ...........fcc3331bbbcbcbcccf..ccccc
    ............c333c1bbbcbcbccccfcddbbc
    ............c333c1bbbbbbbcccccddbcc.
    ............c333c11bbbbbccccccbbcc..
    ...........cc331c11bbbbccccccfbccf..
    ...........cc13c11cbbbcccccbbcfccf..
    ...........c111111cbbbfdddddc.fbbcf.
    ............cc1111fbdbbfdddc...fbbf.
    ..............cccfffbdbbfcc.....fbbf
    ....................fffff........fff
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Enemy)
mySprite2 = sprites.create(assets.image`shark catch`, SpriteKind.Projectile)
forever(function () {
    pause(2000)
    mySprite2.setPosition(randint(100, -100), randint(110, -110))
})
