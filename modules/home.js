var React = require('react');
var ReactDOM = require('react-dom');
var NavLink = require('./NavLink');

var Home = React.createClass({
    getInitialState: function(){
        return {
            list1:[],
            list2:[]
        }
    },
    getDefaultProps: function(){
        return {}
    },
    componentWillMount: function(){
        var _this = this;
        $.ajax({url:"http://localhost:3000/db"}).then(function(res){
            _this.setState({
                list1: res.subjects
            })
        });
        $.ajax({url:"http://localhost:3002/db"}).then(function(res){
            console.log(res.tracks)
            _this.setState({
                list2: res.tracks
            })
        })
    },
    render: function(){
        var style = {textAlign: "center"};
        var style_height = {height:"30px", padding:"10px 0"}
        if(this.state.list1.length>0){
			var lst1 = [];
			var data = this.state.list1;
			var listLen = data.length;
			for(var i =0;i<6;i++){
				
				var detailUrl = "/detail/movie/" + data[i].id;
                    lst1.push(
                    <div className="col-lg-4" style={style} key={i}>
			          <img className="img-circle" 
			          src={data[i].images.medium} 
			          alt="Generic placeholder image" width="140" height="140"/>
			          <h2>{data[i].title}</h2>
			          <p>{data[i].summary}</p>
			          <p>
			          <NavLink to={detailUrl} className="btn btn-default" role="button">
			         	View details &raquo;</NavLink></p>
			        </div>)
			}

		}
        if(this.state.list2.length>0){
			var lst2 = [];
			var data = this.state.list2;
			var listLen = data.length;
			for(var i =0;i<6;i++){
				
				var detailUrl = "/detail/music/" + data[i].id;
                    lst2.push(
                    <div className="col-lg-4" style={style} key={i}>
			          <img className="img-circle" 
			          src={data[i].album.blurPicUrl} 
			          alt="Generic placeholder image" width="140" height="140"/>
			          <h2>{data[i].name}</h2>
			          
			          <p>
			          <NavLink to={detailUrl} className="btn btn-default" role="button">
			         	View details &raquo;</NavLink></p>
			        </div>)
			}

		}
        return(
            <div className="container marketing">
                <div style={style_height}><div className="btn btn-default pull-left">电影频道</div>
                <NavLink to='/list/movie/1' className="btn btn-default pull-right" role="button">More</NavLink></div>
		      <div className="row well">
		        {lst1}
		      </div>
              <div style={style_height}><div className="btn btn-default pull-left">歌曲频道</div>
              <NavLink to='/list/music/1' className="btn btn-default pull-right" role="button">More</NavLink></div>
		      <div className="row well">
		        {lst2}
		      </div>
              
			</div>
        )
    }
})
module.exports = Home;