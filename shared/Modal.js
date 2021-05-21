import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View} from 'react-native';
import {Text, Button} from 'native-base';

toggleModal = () => {};

function CustomModal(props) {
  const [toggleModal, setToggleModal] = useState(true);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <Modal
      isVisible={toggleModal}
      style={{
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: '20%',
        marginTop: '20%',
      }}
      onBackdropPress={() => toggleModalHandler(false)}
      onBackButtonPress={() => toggleModalHandler(false)}>
      {props.children}
    </Modal>
  );
}

export default CustomModal;
