/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import MyCustomPlugin from "../../components/MyCustomPlugin";

const HomePage = () => {
  return (
    <div>
      <h1>I changed my title</h1>
      <p>Hi! I just earned my self a bragging right for
        chaning the title of this plugin</p>
      <MyCustomPlugin/>
    </div>
  );
};

export default memo(HomePage);
