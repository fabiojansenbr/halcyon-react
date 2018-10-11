import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../../context';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

class ModalDialog extends Component {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
        this.onOk = this.onOk.bind(this);
    }

    onClose() {
        this.props.context.closeModal();
    }

    async onOk() {
        await this.props.context.modal.onOk();
        this.props.context.closeModal();
    }

    render() {
        if (!this.props.context.modal) {
            return null;
        }

        return (
            <Modal isOpen={true} toggle={this.onClose} fade={false}>
                <ModalHeader toggle={this.onClose}>
                    {this.props.context.modal.title}
                </ModalHeader>
                <ModalBody
                    dangerouslySetInnerHTML={{
                        __html: this.props.context.modal.message
                    }}
                />
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

ModalDialog.propTypes = {
    context: PropTypes.object
};

export default withContext(ModalDialog);
