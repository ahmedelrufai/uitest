import CustomText from "../custormElements/Text.tsx";
import React from "react";
import {normalizeh, normalizew} from "../../utils/helpers.ts";
import styled from "styled-components/native";
import CustomButton from "../custormElements/CustomButton.tsx";
import {useNavigation} from "@react-navigation/native";
const ServicePlaceHolder = require("../../assets/images/ServicePlaceholder.png");
const Star = require("../../assets/images/Star.png")
interface ServiceItemProps {
	index:number;

}

const ServiceItem:React.FC<ServiceItemProps> = ({index}) => {
	const navigation = useNavigation()
	const handlePressed=()=>{
     // @ts-ignore
		navigation.navigate("Subscription")
	}
	return <Item key={index}>
		<CustomButton onPress={handlePressed}>

		<Image  source={ServicePlaceHolder} />
		<TopWrapper>
			<CustomText size={28} weight={600} >
				Bug watch
			</CustomText>
			<StarsWrapper>

				{
					Array.from({ length: 4 }).map((_, index) => {
						return <StarIcon key={index} source={Star} />
					} )
				}
			</StarsWrapper>

		</TopWrapper>
		<BottomWrapper>
			<CustomText size={22}>
				Our SaaS solution simplifies error tracking and management.
			</CustomText>
		</BottomWrapper>
		</CustomButton>

	</Item>

}


const StarsWrapper = styled.View`
flex-direction: row;
	gap: ${normalizew(8)}px;
`
const StarIcon = styled.Image`
  width: ${normalizew(20)}px;
	height: ${normalizeh(20)}px;
`
const TopWrapper = styled.View`
  padding: ${normalizeh(14)}px ${normalizeh(16)}px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`
const BottomWrapper = styled.View`
  padding: 0 ${normalizeh(16)}px;
  max-width: 100%;
`
const Image = styled.Image`
width: 100%;
	min-width: 100%;
	height: ${normalizeh(210)}px;
  border-radius: ${normalizeh(32)}px;
	aspect-ratio: 1;
	
`
const Item = styled.View`
  width: 49%;
  height: ${normalizeh(340)}px;
  background-color: ${({theme})=>theme.topBackground};
	margin-bottom: ${normalizeh(32)}px;
	border-radius: ${normalizeh(32)}px;
	
`;
export default ServiceItem
