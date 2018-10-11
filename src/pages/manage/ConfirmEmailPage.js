import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { confirmEmail } from '../../actions/manageActions';
import { parse } from '../../utils/querystring';

class ManagePage extends Component {
    async componentDidMount() {
        const qs = parse(this.props.location);

        await this.props.confirmEmail({
            code: qs.code
        });

        this.props.history.push('/manage');
    }

    render() {
        return null;
    }
}

const mapDispatchToProps = dispatch => ({
    confirmEmail: model => dispatch(confirmEmail(model))
});

ManagePage.propTypes = {
    confirmEmail: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default connect(
    undefined,
    mapDispatchToProps
)(ManagePage);
