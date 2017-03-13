var React = require('react');
var Comment = require('./comment');

var Detail = React.createClass({
    getInitialState: function(){
        return {
            detail: []
        }
    },
    getDefaultProps: function(){
        return {}
    },
    componentWillMount: function(){
        var _this = this;
      if(this.props.params.category == 'movie'){

      }
        switch (this.props.params.category){
            case 'movie':
                var url="http://localhost:3000/subjects";
                break;
            case 'music':
                var url= "http://localhost:3002/tracks"
                break;
        }
         $.ajax({url:url}).then(function(res){
            _this.setState({
                detail: res
            })
        })
    },
    // componentDidMount: function(){
    //     if($('audio')){
    //         $('audio').attr({'autoplay':'autoplay'});
    //         $('audio').attr({'controls':'controls'})
    //     }
    // },
    render: function(){
        var _left = {float:"left", margin:"0 100px 100px 0"}
        var _right = {float:"right"}
        var hidden = {overflow:"hidden"}
        if(this.props.params.category == 'movie'){
        var _id = this.props.params.id;
        var data = this.state.detail;
        var detailLen = data.length;
        var det = [];
        for(var i = 0; i < detailLen; i++){
            if(data[i].id == _id){
                det.push(<div key={i}><img  
			          src={data[i].images.large} 
			          alt="Generic placeholder image" />
			          <h2>{data[i].title}</h2>
			          <p>{data[i].summary}</p></div>)
            }
        }
        }else{
        var _id = this.props.params.id;
       
        var data = this.state.detail;
        var detailLen = data.length;
        var det = [];
        for(var i = 0; i < detailLen; i++){
            if(data[i].id == _id){
                det.push(<div style={hidden} key={i}><img style={_left} 
			          src={data[i].album.blurPicUrl} 
			          alt="Generic placeholder image" width="300" height="300"/>
			          <h2>{data[i].name}</h2>
			          <audio controls='controls'>{data[i].mp3Url}</audio></div>)
            }
        }
        }
        return(<div>{det}<Comment id={this.props.params.id}></Comment></div>)
    }
})
module.exports = Detail;