import App from 'src/components/App';
import { connect } from 'react-redux';

import { connectWebSocket } from 'src/store/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  connectWebSocketServer: () => dispatch(connectWebSocket()),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
