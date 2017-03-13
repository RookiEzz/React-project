var React = require('react');
var NavLink = require('./NavLink');

var Search = React.createClass({
    getInitialState: function(){
        return {
            list: []
        }
    },
    getDefaultProps: function(){
        return {}
    },
    componentWillMount: function(){
        
    },
    search: function(){
       console.log(this.props)
        },
        render: function(){
        return(<div><input ref='ipt' type="text"/><button onClick={this.search}>搜索</button><div className='content'></div><div ></div></div>)
    }
})
module.exports = Search;