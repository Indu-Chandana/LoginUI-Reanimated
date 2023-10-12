module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "nativewind/babel",
    'react-native-reanimated/plugin', // this SHOULD be stay at very end of this array
  ],
};
