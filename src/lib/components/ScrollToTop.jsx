import {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class SimpleScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

SimpleScrollToTop.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

export default withRouter(SimpleScrollToTop);