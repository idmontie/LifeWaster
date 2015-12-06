GameButton = React.createClass({
  handlePush(e) {
    e.preventDefault();

    this.props.onPushCallback();
  },
  render() {
    return (
      <div className="game-button">
        <button onClick={this.handlePush}></button>
      </div>
    );
  }
});