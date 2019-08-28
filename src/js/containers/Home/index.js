import { connect } from 'react-redux';
import Home from './home';

function mapStoreToProps(store) {
    return {
        quota: store.home.quota,
        metrics: store.home.metrics,
        hum: store.home.hum,
        humx: store.home.humx,
        other: store.home.other,
        tablets: store.home.tablets,
        jetpacks: store.home.jetpacks,
        virtual: store.home.virtual,
        desktop: store.home.desktop,
        whp: store.home.whp,
        multi: store.home.multi,
        single: store.home.single,
        techCoach: store.home.techCoach,
        ew: store.home.ew,
        addLine: store.home.addLine,
        accessories: store.home.accessories
    }
}

export default connect(mapStoreToProps)(Home);