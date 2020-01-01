import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

import Routes from './routes';
import GlobalStyle from './styles/global';


class App extends Component {
  componentDidMount() {

  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <Routes />
        <GlobalStyle />
      </Container>
    );
  }
}

// const mapStateToProps = (state) => ({
//   modalIsOpen: state,
// });

// const mapDispatchToProps = (dispatch) => bindActionCreators({ openModal, closeModal }, dispatch);

// export default connect(mapDispatchToProps, mapStateToProps)(App);
/* <button type="button" onClick={() => { this.props.dispatch(openModal()); }}>Open</button>
        <button type="button" onClick={() => { this.props.dispatch(closeModal()); }}>Close</button>
        <GlobalStyle />
        <Modal show={this.props.state.modalIsOpen}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
            fuga omnis a sed impedit explicabo accusantium nihil doloremque
            consequuntur.
        </Modal> */
export default connect((state) => ({ state: state.modal }))(App);
