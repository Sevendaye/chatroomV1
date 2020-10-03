import Form from 'src/components/Form';
import { connect } from 'react-redux';

import { sendMessage, changeMessage } from 'src/store/actions';

const mapStateToProps = (state) => ({
  inputValue: state.currentMessage,
  author: state.author,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => dispatch(sendMessage()),
  changeMessage: (message) => dispatch(changeMessage(message)),

});

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;
