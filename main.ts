// let picnicFoodList: string[] = []
function check_strikes () {
    if (strikes == 3) {
        game.splash("You lose!")
        game.gameOver(false)
    }
}
function check_score () {
    if (info.score() == 5) {
        game.splash("You win!")
        game.gameOver(true)
    }
}
function calc_guess (user_guess: string) {
    match = 0
    for (let index = 0; index <= picnicFoodList.length - 1; index++) {
        if (picnicFoodList[index] == user_guess) {
            match = 1
        }
    }
    if (match == 1) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        game.splash("Your score is: " + info.score())
    } else {
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
        strikes += 1
        game.splash("That's " + strikes + " strike(s)!")
    }
    check_score()
    check_strikes()
}
let match = 0
let user_guess = ""
let strikes = 0
let picnicFoodList: string[] = []
scene.setBackgroundImage(img`
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    `)
let picnicFood = sprites.create(img`
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
picnicFood.setImage(img`
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
let picnicFoodImages = [
img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `,
img`
    ......................bbb.......
    ....................bb333b......
    .................bbb333d33b.....
    ................bb333333d3a.....
    ..............bb33332eeeedba....
    ............bbb333323eee2e3a....
    ..........bbd333333e22222ed3a...
    .......bbbdd3333333e22222edda...
    ......bb3d333333333be222eb3d3a..
    ...bbb3dd33333333333beeeb33d3a..
    ..b3ddd33333333333333333333dda..
    bbddd3333333333333333333333dd3a.
    b33dddddd3333333333333333333d3a.
    bb3333333ddddd33333333333333dda.
    bbbbbbb333dd33dddddddddd3333ddba
    b55553bbbbbb3333dd33333ddd33dd3a
    b555555555553bbbbbbbb33333dddd3a
    bd555555555555555dddbaaaaab3d3ba
    bb55555555555555555dddddddbb33ba
    b3bb35555555555d5555d55dddddbbba
    b33333bbb355dd55555d555ddddddbba
    b5555d333333bbb35dddddd55ddddbba
    b5d555dd5553333bbbbb3ddddddddb3a
    b5d555555555555dd3333bbbbbb3db3a
    bd5d555555d55555dd555ddbbbbbbb3a
    bbb55dd555555555555555ddddddbb3a
    ...bbbbdd555ddd5555ddddddddddb3a
    .......bbbb555555d5ddd5ddddddb3a
    ...........bbbb55555555555dd533a
    ...............bbbbddd5d55d5b3ba
    ...................bbbbddddb3ba.
    .......................bbbaaaa..
    `,
img`
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . 2 2 3 3 3 3 2 e . . . . 
    . . . 2 3 d 1 1 d d 3 2 e . . . 
    . . 2 3 1 d 3 3 3 d d 3 e . . . 
    . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
    . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
    2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
    2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
    2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
    2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
    e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
    e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
    e 3 d 3 3 1 d d 3 d 1 b b e e . 
    . e 3 1 1 d d 1 1 1 b b e e e . 
    . . e 3 3 3 3 3 3 b e e e e . . 
    . . . e e e e e e e e e e . . . 
    `,
img`
    ..........bbbbbb................
    .......bbb444444bb..............
    .....2244444ddd444b.............
    ....244444444dddd44e............
    ...244444444444ddd4be...........
    ..244444444444444d44be..........
    .2b444444444444444d4be..........
    .2b44444444444444444bbe.........
    2bbb4444444444444444bbe.........
    2bbb4444444444444444bbe.........
    2bb4b4444444444444444bbe........
    2bb4444444444444444444be........
    2bb44444444444444444444e........
    2bbb444bbb4444444444444e........
    22bbb444bb4bb444444444be........
    .2bbbbb44bbbb44444444bbe........
    .22bbbbbbbb44bbb444444bbe.......
    ..eeebbbbbbb44bbb444444be.......
    ...eeeeebbbbbbbb44b4444be.......
    .....eeeeee222bb44bbb4bbe.......
    .......eeeee222bb44bbbbee.......
    ............e222bbbbbbbec.......
    ..............ee2bbbbeebdb......
    .................eeeeecdddb.....
    .......................cd11bbbb.
    ........................cd111dbb
    .........................b11111c
    .........................c11dd1c
    .........................cd1dbc.
    .........................cb11c..
    ..........................ccc...
    ................................
    `,
img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `
]
picnicFoodList = [
"strawberry",
"strawberries",
"cake",
"ham",
"chicken leg",
"chicken",
"apple"
]
for (let index2 = 0; index2 <= 4; index2++) {
    picnicFood.setImage(picnicFoodImages[index2])
    pause(500)
}
sprites.destroy(picnicFood)
info.setScore(0)
strikes = 0
while (info.score() < 5 || strikes < 3) {
    user_guess = game.askForString("What food items are found inside of Yogi's basket?")
    calc_guess(user_guess)
}
