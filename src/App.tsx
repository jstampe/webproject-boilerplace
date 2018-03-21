import * as React from "react";
import "./App.css";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { ReduxState } from "./reducers/rootReducer";
import { doTest } from "./actions/testActions";

interface OwnProps {
  foobar?: string;
}
interface PropsFromDispatch {
  doSomeAction(): void;
}
interface PropsFromState {
  test: string;
}
interface Props extends OwnProps, PropsFromDispatch, PropsFromState {}

const logo = require("./logo.svg");

class App extends React.Component<Props, {}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <button onClick={this.props.doSomeAction}>Action!</button>
        <pre>Result: {this.props.test}</pre>
        <pre>Another: {this.props.foobar}</pre>
      </div>
    );
  }
}

type MapDispatch = MapDispatchToProps<PropsFromDispatch, OwnProps>;
const mapDispatchToProps: MapDispatch = (dispatch, ownProps) => ({
  doSomeAction: () => {
    dispatch(doTest(Math.random()));
  }
});

type MapState = MapStateToProps<PropsFromState, OwnProps, ReduxState>;
const mapStateToProps: MapState = (state, ownProps) => {
  return {
    test: state.testState.test,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
