var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Game;
(function (Game) {
    var LevelSelectState = (function (_super) {
        __extends(LevelSelectState, _super);
        function LevelSelectState() {
            _super.call(this);
        }
        LevelSelectState.prototype.create = function () {
            this.background = this.add.sprite(0, 0, "background");
        };
        return LevelSelectState;
    })(Phaser.State);
    Game.LevelSelectState = LevelSelectState;
})(Game || (Game = {}));
