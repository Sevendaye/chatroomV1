import Settings from 'src/components/Settings';
import { connect } from 'react-redux';

import { inputEmailChange, inputPasswordChange } from 'src/store/actions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  inputEmailChange: (email) => dispatch(inputEmailChange(email)),
  inputPasswordChange: (password) => dispatch(inputPasswordChange(password)),
});

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsContainer;
