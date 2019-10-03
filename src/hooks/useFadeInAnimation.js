import React, { useState } from 'react';
import { Animated} from 'react-native';
export const useFadeInAnimation = initialValue => {
  const [fadeAnim] = useState(new Animated.Value(initialValue)) 

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [])
  
  return [useFadeInAnimation]
}
