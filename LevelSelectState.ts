module Game{
    export class LevelSelectState extends Phaser.State{
        //settings
        game: Phaser.Game;
        music: Phaser.Sound;

        //sprites
        background: Phaser.Sprite;
        //button_1: Phaser.Sprite;
        //infoPanel: Phaser.Sprite;
        //planet: Phaser.Sprite;
        //mineralPanel: Phaser.Sprite;

        constructor(){
            super();
        }
        create(){
            this.background = this.add.sprite(0,0,"background");
        }

    }
}
