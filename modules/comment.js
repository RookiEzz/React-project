var React = require('react');

var Comment = React.createClass({
    getInitialState: function(){
        return {
            comments: []
        }
    },
    getDefaultProps: function(){
        return {}
    },
    commentHandler: function(){
        var _this = this;
        console.log(this.refs.ipt)
         $.ajax({
             url:"http://localhost:3001/comment", 
             type:"POST", 
             data:{movieid:_this.props.id, comment: _this.refs.ipt.value}
        }).then(function(res){
            console.log(res)
            alert('评论成功')
            window.location.reload();
        })
    },
    componentWillMount: function(){
        var _this = this;
       
         $.ajax({
             url:"http://localhost:3001/comment"
            }).then(function(res){
                console.log(res)
            _this.setState({
                comments: res
            })
        })
    },
    render: function(){
        var style = {width: '60%', height:'100px', margin:"0 auto"}
        var commentsArr = [];
        var len = this.state.comments.length;
        var user = {color:"rgb(16, 202, 19)"}
        for(var i = 0; i < len; i++){
            if(this.props.id == this.state.comments[i].movieid){

           
            commentsArr.push(<div className="well" key={i}><span style={user}>{this.state.comments[i].id}</span>说：<p>{this.state.comments[i].comment}</p></div>)
             }
        }
        return(<div><textarea ref='ipt' style={ style }></textarea><button className="btn btn-default" onClick={this.commentHandler}>我要说两句</button>{commentsArr}</div>)
    }
})
module.exports = Comment;