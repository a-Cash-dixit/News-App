import React, { Component } from "react";
import Navbar from "./components/navBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/footer";

class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  pagesize = 9;
  state = {
    progress: 10,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pagesize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="business"
                pageSize={this.pagesize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.pagesize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/sports">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="sports"
                pageSize={this.pagesize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/science">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="science"
                pageSize={9}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/technology">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="technology"
                pageSize={this.pagesize}
                country="in"
                category="technology"
              />
            </Route>
            <Route exact path="/health">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="health"
                pageSize={this.pagesize}
                country="in"
                category="health"
              />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
