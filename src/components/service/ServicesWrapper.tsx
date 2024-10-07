import CustomText from "../custormElements/Text.tsx";
import React from "react";
import styled from "styled-components/native";
import {normalizeh, normalizew} from "../../utils/helpers.ts";
import ServiceItem from "./Item.tsx";

const ServicesWrapper = () => {
 return	<Items showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap",width:"100%",justifyContent:"space-between" }}>
		{Array.from({ length: 12 }).map((_, index) => (
     <ServiceItem   index={index}/>
		))}
	</Items>

}
export default ServicesWrapper

const Items = styled.ScrollView`
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${normalizew(10)}px; /* Adjust the gap between items */
`;

