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

        <GameStatus lastClick={this.state.lastClick}/>

        <GameButton onPushCallback={this.handlePush} />
      </div>
    );
  }
})