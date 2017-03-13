var React = require('react');
var NavLink = require('./NavLink');

var List = React.createClass({
    getInitialState: function(){
        return {
            list: [],
            searchName:'',
            isFirst: true
        }
    },
    getDefaultProps: function(){
        return {}
    },
    componentWillMount: function(){
        var _this = this;
        console.log(this.props.params)
        var url = this.props.params.category == 'movie'?"http://localhost:3000/subjects":"http://localhost:3002/tracks"
         $.ajax({url:url}).then(function(res){
            _this.setState({
                list: res
            })
        })
    },
    pageHandler: function(){
        console.log('fanye')
        this.setState({
            isFirst: false
        })
    },
    search: function(){
        // var Molst = [];
        // var data = this.state.list;
        // var dataLen = data.length;
        // console.log(data)
        // var title = data[0].title;
        // var searchName = this.refs.ipt.value;
        // console.log(searchName)
        // console.log(title)
        // for(var i = 0; i < dataLen; i++){
        //     if(data[i].title.indexOf(searchName) != -1 || data[i].title.indexOf(searchName) != -1){
        //        Molst.push(data[i])
        //         this.setState({
        //             Mlst:Molst
        //         })
                
        //         console.log(data[i])
        //     }
            
        // }
        // if(Mlst.length == 0){
        //         console.log('为找到')
        //     }
       
        this.setState({
            searchName: this.refs.ipt.value,
            isFirst: false
        })
        
    },
    render: function(){
        var hidden={overflow:"hidden", minHeight:"770px"}
        var center = {textAlign: 'center'}
        var curName = this.state.searchName;
        var data = this.state.list;
        var data2 = [];
        var listLen = data.length;
        var det = [];
        var style_a = {fontSize:"18px", padding:"10px 5px", maeginTop:"10px"}
      
       console.log(this.state.searchName)
        if(this.state.list.length>0 && (this.props.params.category == 'movie')){
            for(var i = 0; i < listLen; i++){
                if((this.state.searchName != '') && (data[i].title.indexOf(curName) != -1)){
                
                data2.push(data[i]);
               
            }
            
            }
            if(data2.length == 0 && (!this.state.isFirst)){
                alert('查找为空或者没有查找到你要的内容，将为你显示所有的内容');
                
            }
			var lst = [];
            var num = [];
			data = data2.length == 0?data:data2;
			var listLen = data.length;
            var pageSize = 9;
            var pages = Math.ceil(listLen / pageSize);
        
            var current = this.props.params.page;
            for(var i = 1; i <= pages; i++){
                var pageUrl = "/list/movie/"+ i;
                num.push(<NavLink onClick={this.pageHandler} style={style_a} to={pageUrl} key={i}>{i}</NavLink>)
            }
            if(current != pages){
                for(var i = (current - 1) * pageSize; i < (current - 1) * pageSize + pageSize; i++){
                
                        
                        var detailUrl = "/detail/movie/" + data[i].id;
                            lst.push(
                            <div className="col-lg-4" key={i} style={center}>
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
         }else{
             for(var i = (current - 1) * pageSize; i < listLen; i++){
                
                        console.log(data[i])
                        var detailUrl = "/detail/movie/" + data[i].id;
                            lst.push(
                            <div className="col-lg-4" key={i} style={center}>
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
			

		}
        if(this.state.list.length>0 && (this.props.params.category == 'music')){
            for(var i = 0; i < listLen; i++){
                if((this.state.searchName != '') && (data[i].name.indexOf(curName) != -1)){
                
                data2.push(data[i]);
               
            }
                
            
            
            }
            var lst = [];
            var num = [];
            data = data2.length == 0?data:data2;
			if(data2.length == 0 && (!this.state.isFirst)){
                alert('查找为空或者没有查找到你要的内容，将为你显示所有的内容')
            }
			var listLen = data.length;
            var pageSize = 9;
            var pages = Math.ceil(listLen / pageSize);
        
            var current = this.props.params.page;
            for(var i = 1; i <= pages; i++){
                var pageUrl = "/list/music/"+ i;
                num.push(<NavLink style={style_a} to={pageUrl}>{i}</NavLink>)
            }
            if(current != pages){
                for(var i = (current - 1) * pageSize; i < (current - 1) * pageSize + pageSize; i++){
                
                        console.log(data[i])
                        var detailUrl = "/detail/music/" + data[i].id;
                            lst.push(
                            <div className="col-lg-4" key={i} style={center}>
                            <img className="img-circle" 
                            src={data[i].album.blurPicUrl} 
                            alt="Generic placeholder image" width="140" height="140"/>
                            <h2>{data[i].name}</h2>
                            <p>{data[i].summary}</p>
                            <p>
                            <NavLink to={detailUrl} className="btn btn-default" role="button">
                                View details &raquo;</NavLink></p>
                            </div>)
                    
                }
         }else{
             for(var i = (current - 1) * pageSize; i < listLen; i++){
                
                        console.log(data[i])
                        var detailUrl = "/detail/music/" + data[i].id;
                            lst.push(
                            <div className="col-lg-4" key={i} style={center}>
                            <img className="img-circle" 
                            src={data[i].album.blurPicUrl} 
                            alt="Generic placeholder image" width="140" height="140"/>
                            <h2>{data[i].name}</h2>
                            <p>{data[i].summary}</p>
                            <p>
                            <NavLink to={detailUrl} className="btn btn-default" role="button">
                                View details &raquo;</NavLink></p>
                            </div>)
                    
                }
         }
        }
        
        return(<div><input type="text" ref='ipt' /><button onClick={this.search}>搜索</button><div style={hidden} className='content'>{lst}</div><div style={center}>{num}</div></div>)
    }
})
module.exports = List;