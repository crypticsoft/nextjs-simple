import React, { useState, useEffect } from 'react';
import '../../third-party/kwes-react-form/dist/entry-loader';

import PropTypes from 'prop-types';

const Loader = ({ id, location, presets }) => <div
    data-form-id={id}
    data-location={location}
    data-presets={presets}
  />;

Loader.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  presets: PropTypes.longText,
};

export default Loader;
