GameController = function () {
  this.splash = function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <SplashPage />
    });
  };

  this.game = function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <GamePage />
    });
  }
};
