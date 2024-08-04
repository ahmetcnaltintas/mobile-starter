import { Redirect } from 'expo-router';
import * as React from 'react';


const Screen = () => {
  return <Redirect href={'/login'} />;
}

export default Screen;