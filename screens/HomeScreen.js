import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from './AppHeader';
import db from '../config';
import firebase from 'firebase';
export default class HomeScreen extends Component {
  constructor(){
    super()
    this.state={
      samAtten:'',
       damAtten:'',
       hamAtten:'',
       lamAtten:'',
       kamAtten:'',
    }
   
  }
  updateAttendance=()=>{
    var update=db.ref('students/').update({
      lamAtten:this.state.lamAtten,
      samAtten:this.state.samAtten,
      hamAtten:this.state.hamAtten,
      kamAtten:this.state.kamAtten,
      damAtten:this.state.damAtten
     } )
  }
  render() {
    return (
      <View>
        <AppHeader />

        <View>
          <Text style={{ fontSize: 50 }}>sam</Text>
          <TouchableOpacity style={{ backgroundColor: 'green' }}
          onPress={()=>{
            this.setState({
              samAtten:'present'
            })
          }}
          >
            <Text style={{ color: 'white' }}>present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'red' }}
          onPress={()=>{
            this.setState({
              samAtten:'absent'
            })
          }}
          >
            <Text style={{ color: 'white' }}>absent</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 50 }}>dam</Text>
          <TouchableOpacity style={{ backgroundColor: 'green' }}
          onPress={()=>{
            this.setState({
              damAtten:'present'
            })
          }}
          >
            <Text style={{ color: 'white' }}>present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'red' }}
          onPress={()=>{
            this.setState({
              damAtten:'absent'
            })
          }}
          >
            <Text style={{ color: 'white' }}>absent</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 50 }}>ham</Text>
          <TouchableOpacity style={{ backgroundColor: 'green' }}
          onPress={()=>{
            this.setState({
              hamAtten:'present'
            })
          }}>
            <Text style={{ color: 'white' }}>present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'red' }}
          onPress={()=>{
            this.setState({
              hamAtten:'absent'
            })
          }}>
            <Text style={{ color: 'white' }}>absent</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 50 }}>lam</Text>
          <TouchableOpacity style={{ backgroundColor: 'green' }}
          onPress={()=>{
            this.setState({
              lamAtten:'present'
            })
          }}>
            <Text style={{ color: 'white' }}>present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'red' }}
          onPress={()=>{
            this.setState({
              lamAtten:'absent'
            })
          }}>
            <Text style={{ color: 'white' }}>absent</Text>

          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 50 }}>kam</Text>
          <TouchableOpacity style={{ backgroundColor: 'green' }}
          onPress={()=>{
            this.setState({
              kamAtten:'present'
            })
          }}>
            <Text style={{ color: 'white' }}>present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'red' }}
          onPress={()=>{
            this.setState({
              kamAtten:'absent'
            })
          }

          }>
            <Text style={{ color: 'white' }}>absent</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={{alignItems:'center',backgroundColor:"orange"}}
        onPress={()=>{
          this.updateAttendance()
        }}>
        <Text style={{fontSize:50}}>submit</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

