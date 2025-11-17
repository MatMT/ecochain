import { useState } from 'react';
import { initialUserStats } from '../../core/data/userData';
import { Activity } from '../../core/data/activitiesData';

export const useUserStats = () => {
  const [userPoints, setUserPoints] = useState(initialUserStats.points);
  const [satoshis, setSatoshis] = useState(initialUserStats.satoshis);
  const [completedHours, setCompletedHours] = useState(initialUserStats.completedHours);

  const addActivityRewards = (activity: Activity) => {
    setUserPoints(prev => prev + activity.points);
    setSatoshis(prev => prev + activity.satoshis);
    setCompletedHours(prev => prev + activity.hours);
  };

  return {
    userPoints,
    satoshis,
    completedHours,
    addActivityRewards
  };
};
