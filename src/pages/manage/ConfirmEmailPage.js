import { Component } from 'react';
import PropTypes from 'prop-types';
import { confirmEmail } from '../../clients/manageClient';

class ManagePage extends Component {
    async componentDidMount() {
        await confirmEmail({
            code: this.props.match.params.code
        });

        this.props.history.push('/manage');
    }

    render() {
        return null;
    }
}

ManagePage.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default ManagePage;
