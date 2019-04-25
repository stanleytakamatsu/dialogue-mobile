import * as React from 'react';
import { StyleSheet, Modal, View } from 'react-native';

import { MaterialIndicator } from 'react-native-indicators';

type Props = { isLoading: boolean };

class Loader extends React.Component<Props> {
  render() {
    const { isLoading } = this.props;

    return (
      <Modal
        transparent={true}
        animationType={'none'}
        onRequestClose={() => {
          console.log('close modal');
        }}
        visible={isLoading}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper} />
          <MaterialIndicator color="cornflowerblue" />
        </View>
      </Modal>
    );
  }
}

export { Loader };

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    flex: 1,
    backgroundColor: '#f5f5f560',
    height: 100,
    width: 100,
    borderRadius: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
