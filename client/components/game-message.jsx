GameMessage = React.createClass({
  messages: {
    0: ' ',
    10: 'Wow!',
    20: 'Great!',
    50: 'Keep it up!',
    100: 'Stahp',
    200: 'Seriously, stahp',
    1000: '...'
  },
  getInitialState() {
    return {
      message: ' '
    }
  },
  getInitialProps() {
    return {
      clickCount: 0
    };
  },
  componentWillReceiveProps(newProps) {
    if (newProps.clickCount != this.props.clickCount) {
      this.triggerChange(newProps.clickCount);
    }
  },
  triggerChange(score) {
    if (this.messages[score]) {
      this.setState({
        message: this.messages[score]
      });
    }
  },
  render() {
    return (
      <div className="game-message">
        <p>{this.state.message}</p>
      </div>
    );
  }
});
