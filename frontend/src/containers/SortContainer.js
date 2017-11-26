import { connect } from 'react-redux';
import { sortBy } from '../actions';

const mapStateToProps = ({ sortBy }) => ({
  sortBy
});

const mapDispatchToProps = (dispatch) => {
  return {, props
    onCriterionSelected: value => {
      dispatch()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)();
