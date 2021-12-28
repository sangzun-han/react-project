import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Video from "./components/video";
import VideoDetail from "./components/videoDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/video-detail/:id" component={VideoDetail} />
          <Route path="/" component={Video} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
