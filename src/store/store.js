import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import {
    loadTranslations,
    setLocale,
    syncTranslationWithStore,
} from 'react-redux-i18n';

import localization from '../localization';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(localization));
store.dispatch(setLocale('en'));

export default store;