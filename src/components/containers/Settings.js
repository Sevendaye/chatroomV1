import Settings from 'src/components/Settings';
import { connect } from 'react-redux';

import { toggleSettingsHidden, setLoadingState, submitLogin } from 'src/store/actions';

const mapStateToProps = (state) => ({
  settingsHidden: state.settings.display,
  loading: state.settings.loading,
  author: state.author,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSettingsHidden: () => dispatch(toggleSettingsHidden()),
  submitLogin: () => dispatch(submitLogin()),
  setLoadingState: (loading) => dispatch(setLoadingState(loading)),
});

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsContainer;
