import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {db} from '../config/db';
import ItemSetting from './ItemSetting';

const itemsRef = db.ref(`/pages`);

export default class Settings extends Component{
	constructor(props){
	    super(props)
	    this.state={
	      items:[]
	    }
  	}

 componentDidMount() {
	 itemsRef.once("value", (snapshot) => {
	 const data = snapshot.val();
	 const items = Object.values(data);

	 this.setState({items});
	 	
	});
 }

  render() {
		return (
	      <View>
	      	<ItemSetting
	      		items={this.state.items}
	      	/>	    
	      </View>
	    );
	}
}

