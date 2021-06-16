import React, {useState} from 'react';
import Modal from 'react-native-modal';

function CustomModal(props) {
  const [toggleModal, setToggleModal] = useState(true);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <Modal
      isVisible={toggleModal}
      style={{
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        borderRadius: 15,
      }}
      onBackdropPress={() => toggleModalHandler(false)}
      onBackButtonPress={() => toggleModalHandler(false)}>
      {props.children}
    </Modal>
  );
}

export default CustomModal;
