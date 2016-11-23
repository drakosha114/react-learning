/**
 * Created by askrypai on 11/23/16.
 */
var TextField = React.createClass({
    render: function () {
        return <div className="text">Привет {this.props.name}</div>
    }
});

var Component = React.createClass({
    getInitialState: function () {
      return {
          name: 'Stranger',
          defaultName: 'Stranger'
      }
    },
    onChangeInputHandler: function (e) {
        this.setState({
            name: e.target.value || this.state.defaultName
        });
    },
    render: function () {
         return (
             <div className="container">
                 <div className="inputWrapper">
                     <input type="text" name="query" onChange={this.onChangeInputHandler}/>
                 </div>
                 <TextField name={this.state.name}/>
             </div>
         )
    }
});
ReactDOM.render(
   <Component/>,
   document.getElementById('content')
);