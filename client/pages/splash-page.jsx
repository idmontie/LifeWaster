SplashPage = React.createClass({
  handleStart() {
    FlowRouter.go('/play');
  },
  render() {
    return (
      <div className="splash-page">
        <h1>Life Waster</h1>

        <button className="splash-page__button" onClick={this.handleStart}>
          <span>Get Wasting!</span>
        </button>
      </div>
    );
  }
});
