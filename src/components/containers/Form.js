import Form from 'src/components/Form';
import { connect } from 'react-redux';

import { sendMessage } from 'src/store/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (message) => dispatch(sendMessage(message)),

});

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;
