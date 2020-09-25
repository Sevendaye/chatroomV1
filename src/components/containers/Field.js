import Field from 'src/components/Field';
import { connect } from 'react-redux';

import { changeFieldValue } from 'src/store/actions';

const mapStateToProps = (state, { inputName }) => ({
  inputValue: state.settings[inputName],
});

const mapDispatchToProps = (dispatch, { inputName }) => ({
  onInputChange: (inputValue) => dispatch(changeFieldValue(inputName, inputValue)),
});

const FieldContainer = connect(mapStateToProps, mapDispatchToProps)(Field);

export default FieldContainer;
