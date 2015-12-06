GamePage = React.createClass({
  getInitialState() {
    return {
      lastClick: 0
    }
  },
  handlePush() {
    this.setState({
      lastClick: +new Date()
    });
  },
  render() {
    return (
      <div className="game-page">
        <GameQuit />

        <div className="row">
          <div className="col m6 s12">
            <GameStatus lastClick={this.state.lastClick}/>
          </div>
          <div className="col m6 s12">
            <GameButton onPushCallback={this.handlePush} />
          </div>
        </div>
      </div>
    );
  }
})