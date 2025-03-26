import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";

interface SkeletonLoaderProps {
     width: number;
     height: number;
     borderRadius?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ width, height, borderRadius = 10 }) => {
     const shimmerAnim = useRef(new Animated.Value(0)).current;

     useEffect(() => {
          Animated.loop(
               Animated.sequence([
                    Animated.timing(shimmerAnim, {
                         toValue: 1,
                         duration: 800,
                         useNativeDriver: false,
                    }),
                    Animated.timing(shimmerAnim, {
                         toValue: 0,
                         duration: 800,
                         useNativeDriver: false,
                    }),
               ])
          ).start();
     }, []);

     const backgroundColor = shimmerAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ["#E0E0E0", "#F5F5F5"],
     });

     return (
          <Animated.View
               style={[styles.skeleton, { width, height, borderRadius, backgroundColor }]}
          />
     );
};

const styles = StyleSheet.create({
     skeleton: {
          marginBottom: 10,
     },
});

export default SkeletonLoader;
