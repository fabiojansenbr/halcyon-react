import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { confirmEmail } from '../../actions/manageActions';

class ManagePage extends Component {
    async componentDidMount() {
        const code = this.props.match.params.code;
        await this.props.confirmEmail({
            code
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
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default connect(
    undefined,
    mapDispatchToProps
)(ManagePage);
