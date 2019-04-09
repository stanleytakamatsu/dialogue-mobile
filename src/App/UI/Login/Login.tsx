import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RkButton, RkTextInput } from 'react-native-ui-kitten';
import { FontAwesome } from '@expo/vector-icons';
import { IApplicationConfiguration } from '../../../App/Config/IApplicationConfiguration';
import { ILoginNavigationProps } from './ILoginNavigationProps';

class Login extends React.Component<ILoginNavigationProps> {
  public async componentDidMount(): Promise<void> {
    const config = await this.props.screenProps.container.get<IApplicationConfiguration>(
      IApplicationConfiguration
    );

    console.log(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Dialogue</Text>
        <RkTextInput label={<FontAwesome name="user" />} placeholder="Login" />
        <RkTextInput
          label={<FontAwesome name="lock" />}
          secureTextEntry={true}
          placeholder="password"
        />
        <RkButton>Login</RkButton>
      </View>
    );
  }
}

export { Login };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    marginHorizontal: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
