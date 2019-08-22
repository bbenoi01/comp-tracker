import { connect } from 'react-redux';
import Home from './home';

function mapStoreToProps(store) {
    return {
        quota: store.app.quota[0],
        metrics: store.app.metrics
    }
}

export default connect(mapStoreToProps)(Home);