import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import {Link} from 'react-router-dom'
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
            var releaseDateSplit = (actualApp["im:releaseDate"]["label"]).split('-');
            var shortDate = `${releaseDateSplit[1]}/${releaseDateSplit[2].substring(0,2)}/${releaseDateSplit[0]}`;
            return (
                <div className="row detail-holder">
                  <header className="col-md-12">
                      <h1 className="main-title">{actualApp["im:name"]["label"]}</h1>
                  </header>
                  <div className="col-md-4 img-details">
                      <img src={actualApp["im:image"][2]["label"]}/><br/>
                      Created By: <a href={actualApp["im:artist"]["attributes"]["href"]}>
                      {actualApp["im:artist"]["label"]}</a>
                      <p>{actualApp["im:price"]["label"]} {actualApp["im:price"]["attributes"]["currency"]}</p>
                      <button type="button" className="btn btn-primary">
                        <a href={actualApp.link["attributes"]["href"]}>Buy Now!</a>
                      </button><br/>
                      <Link to={`/`} >
                        <button type="button" class="btn btn-default btn-xs">Back to Top 100</button>
                      </Link>
                  </div>
                  <div className="col-md-8 app-details">
                      <p><b>Category:</b> {actualApp.category.attributes.label}</p>
                      <p><b>Released:</b> {shortDate}</p>
                      <p> {actualApp.summary.label} </p>
                  </div>
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
