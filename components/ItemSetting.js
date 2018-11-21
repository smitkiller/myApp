import React,{Component} from 'react';
import { StyleSheet,View, Text } from 'react-native';
import { Card,Button } from 'react-native-elements';
import Styles from '../Styles';

export default class ItemSetting extends Component{

	render(){
		const {items} = this.props;

		return(
				<Card title="Settings" >
				{
					items.map((item,key)=>
						<View key={key}>
							<Text>Title : {item.title}</Text>
							<Text>content:{item.content}</Text>
						</View>
					)
				}
					<Button />
				</Card>

			)
	}
}

