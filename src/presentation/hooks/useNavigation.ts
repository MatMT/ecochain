import { useState } from 'react';
import { VIEWS } from '../../config/constants';

export const useNavigation = () => {
  const [currentView, setCurrentView] = useState(VIEWS.HOME);

  return {
    currentView,
    setCurrentView
  };
};
