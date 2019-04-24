import * as React from 'react';
import { StyleSheet, Text, StatusBar, View, KeyboardAvoidingView, Platform } from 'react-native';
import { RkButton, RkTextInput } from 'react-native-ui-kitten';

Platform.select({
  ios: () => StatusBar.setBarStyle('light-content'),
  android: () => StatusBar.setBackgroundColor('#01579B')
})();

import { FontAwesome } from '@expo/vector-icons';

import { IView } from '../../Core/Interface/IView';
import { ILogin } from '../ILogin';
import { ILoginNavigationProps } from '../ILoginNavigationProps';
import { Loader } from '../../Core/Loader/Loader';
type State = { username: string; password: string; isLoading: boolean };

class RkLoginView implements IView {
  private controller: ILogin<ILoginNavigationProps, State>;

  public render(): React.ReactNode {
    return (
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="padding" enabled>
        <View style={styles.container}>
          <Loader isLoading={this.controller.state.isLoading} />
          <Text>Dialogue</Text>
          <RkTextInput
            label={<FontAwesome name="user" />}
            placeholder="Username"
            onChangeText={this.controller.onChangeUsernameInput}
          />
          <RkTextInput
            label={<FontAwesome name="lock" />}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={this.controller.onChangePasswordInput}
          />
          <RkButton onPress={async () => await this.controller.login()}>Login</RkButton>
        </View>
      </KeyboardAvoidingView>
    );
  }

  public attach(controller: ILogin<ILoginNavigationProps, State>): void {
    this.controller = controller;
  }
}

export { RkLoginView };

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1
  },
  container: {
    flex: 1,
    marginTop: 5,
    marginHorizontal: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
