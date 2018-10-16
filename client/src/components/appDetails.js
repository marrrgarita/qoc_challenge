import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import React from 'react';

class appDetails extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
            appId: props.match.params.appid,
        }
    }

    componentWillMount() {
        this.props.appActions.fetchApplications();
    }

    renderData(item) {
        return <div key={item.id}>{item.name}</div>;
    }

    render() {
      var reportData = this.props.apps;
      var appId = this.state.appId;
      var selectedApp = reportData.filter(function(e) {
         return e.id.attributes["im:id"] === appId;
      });
      var actualApp = selectedApp[0];
      console.log(selectedApp[0]);
        if(!actualApp){
            return (
                <div>
                    Loading Details...
                </div>
            )
        }else{
            return (
                <div className="">
                  {actualApp.id.attributes["im:id"]}
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
)(appDetails);
