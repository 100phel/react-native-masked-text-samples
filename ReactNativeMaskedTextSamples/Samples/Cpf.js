import React from 'react'
import { View, Text } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import { textInputStype, container } from './styles'

export default class MyScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cpf: ''
    }
  }

  render() {
    return (
      <View style={container}>
        <Text>CPF</Text>
        <TextInputMask
          type={'cpf'}
          value={this.state.cpf}
          onChangeText={text => {
            this.setState({
              cpf: text
            })
          }}
          style={textInputStype}
        />
      </View>
    )
  }
}