GameCountdown = React.createClass({
  getInitialProps() {
    countdown: 0
  },
  calculateWidth(current) {
    return ((current * 1.0)) + '%';
  },
  render() {
    var width = this.calculateWidth(this.props.countdown);

    var style = {
      width: width
    };

    return (
      <div className="game-countdown">
        <div className="game-countdown__bar" style={style}>
        </div>
      </div>
    );
  }
});