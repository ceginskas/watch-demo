import React, { Component } from 'react';

export default WrapperComponent => {
  return class withModalInfo extends Component {
    constructor(props) {
      super(props);

      this.state = {
        modalIsOpen: false,
        modalInfo: null
      };
    }

    toggleModal(data) {
      this.setState({
        modalIsOpen: !this.state.modalIsOpen,
        modalInfo: data ? data : null
      });
    }

    render() {
      return (
        <WrapperComponent
          {...this.state}
          toggleModal={e => this.toggleModal(e)}
        />
      );
    }
  };
};
