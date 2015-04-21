var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Game;
(function (Game) {
    var TitleState = (function (_super) {
        __extends(TitleState, _super);
        function TitleState() {
            _super.call(this);
        }
        TitleState.prototype.create = function () {
            this.titleScreen = this.add.sprite(0, 0, "titleScreen");
        };
        return TitleState;
    })(Phaser.State);
    Game.TitleState = TitleState;
})(Game || (Game = {}));
