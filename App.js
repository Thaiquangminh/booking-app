import { StyleSheet } from 'react-native';
import { ModalPortal } from 'react-native-modals';
import StackNavigator from './router/StackNavigator';
import { store } from './store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
      <ModalPortal />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
