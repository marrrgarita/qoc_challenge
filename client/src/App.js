import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppList from './components/appList';



class App extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
            data: null,
        }
    }

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <header className="col-md-12">
              <h1 className="main-title">iTunes Top 100</h1>
          </header>
        </div>
        <AppList />
      </div>
    );
  }
}

export default App;
