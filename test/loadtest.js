'use strict';

import 'babel-polyfill';
const testsContext = require.context('.', true, /.*\.spec\.js$/);
testsContext.keys().forEach(testsContext);