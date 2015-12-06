GameCounter = React.createClass({
  getInitialProps() {
    return {
      clickCount: 0
    };
  },
  render() {
    return (
      <div className="game-counter">
        <p>{this.props.clickCount}</p>
      </div>
    );
  }
});
