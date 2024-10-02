import styled from "styled-components/native";

import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import {normalizeh, normalizew} from "../../utils/helpers.ts";
import {darkTheme,lightTheme,} from "../../utils/theme.ts";
import useStore from "../../store/store.ts";
import {Dimensions} from "react-native";
import CustomText from "../custormElements/Text.tsx";

const Activity = () => {
	const {activeTheme} = useStore();
	const data=[ {value:50}, {value:80}, {value:90}, {value:70},{value:30},{value:20},{value:80}    ]
 const theme = activeTheme==="dark"?darkTheme:lightTheme;
	const {width} =Dimensions.get("screen")
	const {lineColor,primary} = theme;
	const chartWidth = width - normalizew(236);

	return <Container>
		<CustomText weight={600}>Number of Businesses</CustomText>
		{/*<BarChart data = {data} />*/}
		<LineChart
			areaChart
			hideDataPoints
			isAnimated
			animationDuration={1200}
			startFillColor={primary}
			startOpacity={1}
			endOpacity={0.3}
			initialSpacing={0}
			data={data}
			spacing={30}
			thickness={5}
			hideRules
			hideYAxisText
			yAxisColor={lineColor}
			showVerticalLines={false}
       width={chartWidth}
			verticalLinesColor="rgba(14,164,164,0.5)"
			xAxisColor={lineColor}
			color={primary}
		/>
		{/*<PieChart data = {data} />*/}
		{/*<PopulationPyramid data = {[{left:10,right:12}, {left:9,right:8}]} />*/}

		{/*<BarChart data = {data} horizontal />*/}
		{/**/}


		{/*<LineChart data = {data} areaChart />*/}



		{/*<PieChart data = {data} donut />*/}
	</Container>
}
const Container = styled.View`

background-color:${({theme})=>theme.topBackground};	
	padding: ${normalizeh(40)}px ${normalizew(40)}px;
	border-radius: ${normalizew(16)+normalizeh(16)}px;
	overflow: hidden;
	gap: ${normalizeh(30)}px;
`
export default Activity
