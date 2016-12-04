/**
 * Created by dhanyapai on 11/26/16.
 */
import React from 'react';
import CustomerTable from './CustomerTable';

export default {

  path: '/customers',

  action() {
    return CustomerTable;
  },

};
