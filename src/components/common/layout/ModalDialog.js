import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modalActions';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

class ModalDialog extends Component {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
        this.onOk = this.onOk.bind(this);
    }

    onClose() {
        this.props.closeModal();
    }

    async onOk() {
        this.props.closeModal();
        await this.props.modal.onOk();
    }

    render() {
        const { show, title, message } = this.props.modal;

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

const mapStateToProps = state => ({
    modal: state.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

ModalDialog.propTypes = {
    modal: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalDialog);
