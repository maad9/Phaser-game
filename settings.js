var GameSetup = (function () {
    function GameSetup() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    GameSetup.prototype.preload = function () {
        this.game.load.image("titleScreen", "graphics/0.png");
        this.game.load.image("background", "graphics/17.png");
    };
    GameSetup.prototype.create = function () {
        this.game.state.add("LevelSelectState", Game.LevelSelectState, true);
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    };
    return GameSetup;
})();
window.onload = function () {
    var game = new GameSetup();
};
