var GameSetup = (function () {
    function GameSetup() {
        this.game = new Phaser.Game(800, 600, Phaser.Auto, 'content', { preload: this.preload, create: this.create });
    }
    GameSetup.prototype.preload = function () {
    };
    GameSetup.prototype.creare = function () {
    };
    return GameSetup;
})();
window.onload = function () {
};
