import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/pageActions'

import Page from '../components/Page'

function mapStateToProps(state) {
  return {
    counter: state.page.counter,
    users: state.page.users,
    error: state.page.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
