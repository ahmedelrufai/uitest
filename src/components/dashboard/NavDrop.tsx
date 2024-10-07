import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ViewStyle, TextStyle, ImageSourcePropType } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import {normalizew} from "../../utils/helpers.ts";
const HandBuggerIcon = require("../../assets/images/HandBuggerIcon.png");

interface DropdownComponentProps {

}
const DropdownComponent: React.FC<DropdownComponentProps> = () => {
	const [selectedValue, setSelectedValue] = useState("");



	const data = [
		{ label: "Logout", value: "logout", icon:HandBuggerIcon},
		{ label: "Subscription", value: "subscription", icon:HandBuggerIcon},
		{ label: "Delete account", value: "deleteAccount", icon: HandBuggerIcon}
	];

	const handleSelect = (item: { value: string }) => {

	};

	const renderItem = (item: { icon: ImageSourcePropType; label: string }) => {
		return (
			<ItemContainer>
				<Icon source={item.icon} />
				<ItemText>{item.label}</ItemText>
			</ItemContainer>
		);
	};

	return (
		<Container>
			<Dropdown
				data={data}
				labelField="label"
				valueField="value"
				placeholder=""
				value={selectedValue}
				onChange={handleSelect}
				style={dropdownStyle}
				containerStyle={dropdownContainerStyle}
				selectedTextStyle={selectedTextStyle}
				renderItem={renderItem}
				// Add a custom right icon
				renderRightIcon={() => (
					<Icon style={{height:40,width:40,marginTop:6}} source={HandBuggerIcon} />
				)}
			/>
		</Container>
	);
};

export default DropdownComponent;

const Container = styled.View`
 
`;

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
	position: relative;
`;

const ItemText = styled.Text`

`;

const dropdownStyle: ViewStyle = {




};

const dropdownContainerStyle: ViewStyle = {

	borderRadius:20,
	padding:10,
	width:200,
	position:"absolute",
  left:220,
	top:110
};

const selectedTextStyle: TextStyle = {
	fontSize: 16,
	color:"transparent"


};

const Icon = styled.Image`
  width: ${normalizew(60)}px;
  max-width: ${normalizew(60)}px;
  aspect-ratio: 1;
`;
