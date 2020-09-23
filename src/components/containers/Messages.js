import Messages from 'src/components/Messages';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  monState: state,
});

const mapDispatchToProps = null;

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
