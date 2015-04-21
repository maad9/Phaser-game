class GameSetup{

    game: Phaser.Game;

    constructor(){
        this.game = new Phaser.Game(800,600,Phaser.AUTO,
        'content',{preload: this.preload, create: this.create});
    }
    preload(){
        this.game.load.image("titleScreen", "graphics/0.png");
        this.game.load.image("background", "graphics/17.png");
    }
    create(){
        this.game.state.add("LevelSelectState",Game.LevelSelectState,true);
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    }
}

window.onload = () =>{
    var game = new GameSetup();
};
