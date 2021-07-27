import React from "react";
import "./App.css";
//import all components
import Header from "./components/Header/Header";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import SideBar from "./components/SideBar/SideBar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import SearchPage from "./components/SearchPage/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* header must be visible on all pages thus it lies above switch element */}
        <Header />
        <Switch>
          {/* video player page */}
          <Route path="/video/:videoId">
            <div className="app__mainpage">
              <VideoPlayer />
            </div>
          </Route>
          {/* search page */}
          <Route path="/search/:searchQuery">
            <div className="app__mainpage">
              <SideBar />
              <SearchPage />
            </div>
          </Route>
          {/* home page */}
          <Route path="/">
            <div className="app__mainpage">
              <SideBar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
