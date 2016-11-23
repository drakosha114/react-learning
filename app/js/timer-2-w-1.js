/**
 * Created by askrypai on 11/23/16.
 */
var Timer = React.createClass({
    getInitialState: function () {
      return {
          time: 0
      }
    },
    tick: function () {
        this.setState({
            time: this.state.time +=1
        });
    },
    componentDidMount: function() {
        this.timer = setInterval(this.tick, 1000)
    },
    componentWillUnmount: function() {
      clearInterval(this.timer);
    },
    render: function () {
        return <p>Прошло {this.state.time} секунд</p>
    }
});

ReactDOM.render(
    <Timer/>,
    document.getElementById('content')
);