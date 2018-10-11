import { Component } from 'react';
import PropTypes from 'prop-types';
import { confirmEmail } from '../../api/manageClient';
import { parse } from '../../utils/querystring';

class ManagePage extends Component {
    async componentDidMount() {
        const qs = parse(this.props.location);

        await confirmEmail({
            code: qs.code
        });

        this.props.history.push('/manage');
    }

    render() {
        return null;
    }
}

ManagePage.propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default ManagePage;
