import Form from 'src/components/Form';
import { connect } from 'react-redux';

import { sendMessage, emitMessage, receiveMessage } from 'src/store/actions';

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (message) => dispatch(sendMessage(message)),
  emitMessage: () => dispatch(emitMessage()),
  receiveMessage: () => dispatch(receiveMessage()),
});

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;
