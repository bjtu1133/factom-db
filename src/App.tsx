import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import { Home } from './page/home';

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider>
        <div className="App">
         <Home />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
