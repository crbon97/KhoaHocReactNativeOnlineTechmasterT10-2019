import React, {Component} from 'react'
import {View} from 'react-native'
import {doSomething, sum, do2Tasks} from '../calculations/calculations'

export default class Main extends Component{
    componentDidMount() {
        //doSomething()
        //alert("6 plus 4 = "+sum(6,4))//press Cmd/Ctrl+S to save and reload
        //console.log("6 plus 4 = "+sum(6,4))
        do2Tasks()
    }
    render(){
        return <View>

        </View>
    }
}
