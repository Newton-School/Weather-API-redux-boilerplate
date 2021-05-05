import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCity,
  weatherSearch
} from './weatherSlice';


// write your selector and use 'useSelector' to abstract them from store

export function Weather() {

  const dispatch = useDispatch();



  return (
  //  render the select tag with all the options


  // render the button to dispatch weatherSearch



  // render weather details/ 'loading' text / errors
  );
}
