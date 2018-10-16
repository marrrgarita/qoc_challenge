import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import {Link} from 'react-router-dom'
import React from 'react';
import '../App.css';


class appList extends React.Component {
  constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.appActions.fetchApplications();
    }

    render() {
      var reportData = this.props.apps;
      console.log(reportData.apps);
        if(!reportData){
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        }else{
            return (
                <div className="row">
                {reportData.map(function(item){
                      return (
                        <div className="col-md-3">
                          <img src={item["im:image"][2]["label"]}/>
                          <Link to={`/details/${item.id.attributes["im:id"]}`} >
                            <h4 key={item.id.attributes["im:id"]}>{item["im:name"]["label"]}</h4>
                          </Link>
                        </div>
                      );
                    })}
                </div>
            )
        }
    }
}


function mapStateToProps(state) {
    return {
        apps: state.apps
    };
}

function mapDispatchToProps(dispatch) {
    return {
       appActions: bindActionCreators(appActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(appList);
