(( Phaser, Game, CFG ) => {
  let hero;

  const preload = _ => {
    game.load.atlasJSONHash(CFG.ASSETS.GFX, CFG.ASSETS.ATLAS_PNG_PATH, CFG.ASSETS.ATLAS_JSON_PATH);
  };

  const create = _ => {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = CFG.GRAVITY;
    game.stage.backgroundColor = CFG.BG_COLOR;
    hero = new Game.Hero(game);

    // add some platforms
    new Game.Platform(game, 0, 200, 4);
  };

  const update = _ => {

  };

  const game = new Phaser.Game(CFG.GAME_WIDTH, CFG.GAME_HEIGHT, Phaser.AUTO, CFG.GAME_CONTAINER_ID, { preload, create, update });

})(window.Phaser, window.Game, window.Game.Configuration);
