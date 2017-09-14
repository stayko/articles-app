import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import '../../css/loadingButton.scss';

class LoadingButton extends React.Component {

  render() {
    const loadingElement = <span className="loading">Loading</span>
    const { clickHandler, isLoading } = this.props;

    return  <button onClick={()=>{clickHandler()}}>
              {isLoading ? loadingElement : 'Load Next'}
            </button>
  }
}

LoadingButton.propTypes = {
  isLoading: PropTypes.bool,
  clickHandler: PropTypes.func
}

export default LoadingButton;
