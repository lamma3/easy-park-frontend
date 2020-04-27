import Modal from 'react-modal';
import { Button } from 'antd-mobile';
import React, {useState} from "react";



function BookingModal() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return(
        <div className={'App'}>
            <Button onClick={() => setModalIsOpen(true)}>Open modal</Button>
            <Modal className={'Modal-box'} isOpen = {modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <h2>Hi</h2>
                <div>
                    <Button onClick = {() => setModalIsOpen(false)}> Close </Button>
                </div>
            </Modal>

        </div>
    )
}

export default BookingModal;
