
import React from 'react';
import PanelWells from './PanelWells';

import VendorForm from './VendorForm';
//
// export default {
//
//   // path: '/panelwells',
//   //
//   // action() {
//   //   return <PanelWells />;
//   // },
//
//   path: '/panelwells',
//   // action() {
//   //   console.log("ACTION: PW")
//   //   return <PanelWells />;
//   // },
//   children: [
//     {
//       path: '/',                       // www.example.com/admin
//       action() {
//         console.log("ACTION: PW")
//         return <PanelWells />;
//       },
//     },
//     {
//       path: '/coupons',
//
//           action() {
//             console.log("ACTION: CF")
//             return <CouponForm />;
//           }
//
//     }
//   ]
//
//
// };


export default {
  path: '/panelwells',

  async action({ next }) {
    const component = await next();
    return component;
  },

  children: [
    {
      path: '/',
      action: async () => <PanelWells />,
    },
    {
      path: '/coupons',

      action() {
        console.log("ACTION: CF")
        return VendorForm;
      }

    }
  ],
};
