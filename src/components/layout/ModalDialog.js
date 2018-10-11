import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export const openModal = () => {};
export const closeModal = () => {};

class ModalDialog extends Component {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
        this.onOk = this.onOk.bind(this);
    }

    onClose() {
        closeModal();
    }

    async onOk() {
        closeModal();
        await this.props.modal.onOk();
    }

    render() {
        const { show, title, message } = this.props.modal || {};

        if (!show) {
            return null;
        }

        return (
            <Modal isOpen={show} toggle={this.onClose} fade={false}>
                <ModalHeader toggle={this.onClose}>{title}</ModalHeader>
                <ModalBody dangerouslySetInnerHTML={{ __html: message }} />
                <ModalFooter>
                    <Button color="secondary" onClick={this.onClose}>
                        Cancel
                    </Button>{' '}
                    <Button color="primary" onClick={this.onOk}>
                        OK
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default ModalDialog;
