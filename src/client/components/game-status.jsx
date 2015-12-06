GameStatus = React.createClass({
  mixins: [SetIntervalMixin],
  getInitialState() {
    return {
      pushCounter: 0,
      countdown: 0
    }
  },
  getInitialProps() {
    return {
      lastClick: 0
    }
  },
  componentWillReceiveProps(newProps) {
    if (this.props.lastClick !== newProps.lastClick) {
      this.triggerPush();
      this.triggerCountdownReset();
    }
  },
  triggerPush() {
    this.setState({
      pushCounter: this.state.pushCounter + 1
    });
  },
  triggerCountdownReset() {
    this.setState({
      countdown: 100
    });
  },
  componentDidMount() {
    this.setInterval(function () {
      if (this.state.countdown > 0) {
        this.setState({
          countdown: this.state.countdown - 1
        });
      }

      if (this.state.countdown === 0) {
        this.setState({
          pushCounter: 0
        });
      }
    }.bind(this), 10);
  },
  render() {
    return (
      <div className="game-status">
        <GameCounter clickCount={this.state.pushCounter} />

        <GameCountdown countdown={this.state.countdown} />

        <GameMessage clickCount={this.state.pushCounter} />
      </div>
    );
  }
});
