var GameSetup = (function () {
    function GameSetup() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    GameSetup.prototype.preload = function () {
        this.game.load.image('phaser', 'phaser.png');
    };
    GameSetup.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaser');
        logo.anchor.setTo(0.5, 0.5);
        logo.scale.setTo(0.2, 0.2);
    };
    return GameSetup;
})();
window.onload = function () {
    var game = new GameSetup();
};
