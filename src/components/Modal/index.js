import React from 'react';
import './modal.css';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { closeModal } from '../../store/actions';

class Modal extends React.Component {
  componentDidMount() {

  }

  render() {
    const { show, dispatch, children } = this.props;
    if (!show) {
      return null;
    }
    return (
      <div className="modal" id="modal">
        <h2>Modal Window</h2>
        <div className="content">{children}</div>
        <div className="actions">
          <button
            type="button"
            className="toggle-button"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            close
          </button>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  dispatch: PropTypes.func,
  children: PropTypes.elementType.isRequired,
};

Modal.defaultProps = {
  dispatch: () => { },
};

export default connect((state) => ({ state }))(Modal);
