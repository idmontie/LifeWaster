GameQuit = React.createClass({
  handleQuit() {
    FlowRouter.go('/');
  },
  render() {
    return (
      <div className="game-quit">
        <a href="#!" onClick={this.handleQuit}>
          <i className="fa fa-close"></i>
        </a>
      </div>
    );
  }
})