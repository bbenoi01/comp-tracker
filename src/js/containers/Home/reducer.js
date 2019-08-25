import { types } from '../../types/types';

const INITIAL_STATE = {
    quota: {},
    metrics: {},
    hum: 0,
    humx: 0,
    other: 0,
    tablets: 0,
    jetpacks: 0,
    virtual: 0,
    desktop: 0,
    whp: 0,
    features: 0,
    multi: 0,
    single: 0,
    techCoach: 0,
    ew: 0,
    addLine: 0,
    accessories: 0
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default function HomeReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {

        case (types.SET_METRICS):
            return {
                quota: payload.quota,
                metrics: payload.metrics,
                hum: payload.metrics.hum,
                humx: payload.metrics.humx,
                other: payload.metrics.other,
                tablets: payload.metrics.tablets,
                jetpacks: payload.metrics.jetpacks,
                virtual: payload.metrics.virtual,
                desktop: payload.metrics.desktop,
                whp: payload.metrics.desktop,
                features: payload.metrics.features,
                multi: payload.metrics.multi,
                single: payload.metrics.single,
                techCoach: payload.metrics.techCoach,
                ew: payload.metrics.ew,
                addLine: payload.metrics.addLine,
                accessories: payload.metrics.accessories
            };

        case(types.EDIT_METRIC):
            return {
                ...state,
                ...payload
            }

        case(types.EDIT_ACC):
        return {
            ...state,
            ...payload
        }
            
        default: return state;

    }
};