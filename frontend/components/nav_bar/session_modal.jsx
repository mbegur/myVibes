import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';
import LoginFormContainer from '../session/log_in_container';
import SignupFormContainer from '../session/sign_up_container';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class SessionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
  //
  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let formType;
    return (
      <div>
        {this.props.formType === "signup" ? <div>
          <button onClick={this.openModal}>Sign Up</button>
          <Modal
          isOpen={this.state.modalIsOpen}

          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Session Modal">

          <SignupFormContainer formType={"signup"} />

        </Modal></div> : <div>
        <button onClick={this.openModal}>Log In</button>
          <Modal
          isOpen={this.state.modalIsOpen}

          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Session Modal">

          <LoginFormContainer formType={"login"} />

        </Modal>
        </div>

            }

      </div>
    );
  }
}

export default SessionModal;
