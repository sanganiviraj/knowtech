import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenTracker = () => {
const [screenStartTime, setScreenStartTime] = useState({});
  const [screenTotalTime, setScreenTotalTime] = useState({});

    const recordScreenStartTime = (routeName) => {
        setScreenStartTime((prev) => ({
        ...prev,
        [routeName]: Date.now(),
        }));
    };

    const recordScreenEndTime = (routeName) => {
        if (screenStartTime[routeName]) {
        const startTime = screenStartTime[routeName];
        const endTime = Date.now();
        const screenTime = endTime - startTime;

        setScreenTotalTime((prev) => ({
            ...prev,
            [routeName]: (prev[routeName] || 0) + screenTime,
        }));
        }
    };

    const trackScreenTime = (routeName) => {
        recordScreenEndTime(routeName);
        recordScreenStartTime(routeName);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('state', (event) => {
        const currentRouteName = event.data.state.routeNames[event.data.state.index];
        trackScreenTime(currentRouteName);
        });

        return unsubscribe;
    }, [navigation]);

  return null;  
}

export default ScreenTracker

const styles = StyleSheet.create({})