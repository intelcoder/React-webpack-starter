/**
 * Created by SeongjunKim on 2016-11-06.
 */
import React from 'react';
import FaHome from 'react-icons/lib/fa/home';
import FaCart from 'react-icons/lib/fa/cart-plus';
import FaCalender from 'react-icons/lib/fa/calendar-o';

export default {
  drawerList: [
    {
      title: 'Home',
      icon: FaHome
    },
    {
      title: 'Checkout My Cart',
      icon: FaCart
    },
    {
      title: 'Calendar',
      icon: FaCalender
    }
  ],
  parallaxImages: [
    '../../../raw-assets/images/overwatch.jpg',
    '../../../raw-assets/images/diablo3.jpg',
    '../../../raw-assets/images/witcher3.jpg'
  ]
}