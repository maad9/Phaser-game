class GameSetup{

    game: Phaser.Game;

    constructor(){
        this.game = new Phaser.Game(800,600,Phaser.Auto,
        'content',{preload: this.preload, create: this.create});
    }
    preload(){

    }
    creare(){

    }
}

window.onload = () =>{

};
