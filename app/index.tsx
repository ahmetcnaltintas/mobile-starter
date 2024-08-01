import { Redirect } from 'expo-router';
import * as React from 'react';


const Screen = () => {
  return <Redirect href={'/home'} />;
}

export default Screen;