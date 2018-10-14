import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import React from 'react';

class appList extends React.Component {
    componentWillMount() {
        this.props.appActions.fetchApplications();
    }

    renderData(item) {
        return <div key={item.id}>{item.name}</div>;
    }

    render() {
      var reportData = this.props.apps;
      var appArray = Object.keys(reportData).map(i => reportData[i])
      console.log(reportData.apps);
        if(!this.props.apps){
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        }else{
            return (
                <div className="">
                {appArray.map(function(item, i){
                      console.log(item);
                      return (
                        <h1 key={item.id.attributes["im:id"]} >{item.title["label"]} </h1>
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
