import { PieChart } from "react-native-gifted-charts";
import { Animated } from "react-native";
import styled from "styled-components/native";
import useStore from "../../store/store.ts";
import { darkTheme, lightTheme } from "../../utils/theme.ts";
import { normalizeh, normalizew } from "../../utils/helpers.ts";
import CustomText from "../custormElements/Text.tsx";

const Services = () => {
	const { activeTheme } = useStore();
	const theme = activeTheme === "dark" ? darkTheme : lightTheme;

	// Pie data without colors
	const pieData = [
		{ value: 47,label:"Error Management" },
		{ value: 40, label:"Real Estate" },
		{ value: 16, label:"It Consulting" },
	];

	// Sort the data to determine highest, middle, and lowest values
	const sortedData = [...pieData].sort((a, b) => b.value - a.value);

	// Assign colors based on sorted position (highest, middle, lowest)
	const assignColors = (data: { value: number;label:string }, index: number) => {
		if (index === 0) {
			return {
				...data, color: theme.primary}; // Highest value color
		} else if (index === sortedData.length - 1) {
			return { ...data, color: "#BDB2FA"}; // Lowest value color
		} else {
			return { ...data, color: "#93FCF8"}; // Middle value color
		}
	};

	// Apply colors to the pie data based on sorting
	const coloredPieData = sortedData.map((data, index) => assignColors(data, index));

	return (
		<Container>
			<Line />
			<Wrapper>
				<Header>
					<CustomText weight={600}>Services</CustomText>
				</Header>
				{
					coloredPieData?.map(item=>{
						return <Label>
							<Dot style={{backgroundColor:item.color}} />
							<CustomText>{item.label}</CustomText>
						</Label>
					})
				}
			</Wrapper>
			<PieChart
				data={coloredPieData}
				donut

				sectionAutoFocus
				radius={70}
				innerRadius={50}
				innerCircleColor={theme.topBackground}
			/>
		</Container>
	);
};
const Header = styled.View`

`
const Dot = styled.View`
	height: ${normalizeh(26)}px;
	width: ${normalizew(26)}px;
	border-radius:${normalizeh(13)+normalizew(13)}px;

`
const Label = styled.View`
flex-direction: row;
	align-items: center;
	gap:  ${normalizeh(16)}px;;

`
const Container = styled.View`
  background-color: ${({ theme }) => theme.topBackground};
  padding: ${normalizeh(40)}px ${normalizew(40)}px;
  border-radius: ${normalizew(16) + normalizeh(16)}px;
  overflow: hidden;
  gap: ${normalizeh(30)}px;
	flex-direction: row;
	justify-content: space-between;
	position: relative;
`;
const Wrapper = styled.View`
  gap: ${normalizeh(32)}px;
`
const Line = styled.View`

  top: 36%;
	left: 4px;
height: 60%;
	width:${normalizew(10)}px;
	position: absolute;
	background-color: ${({theme})=>theme.lineColor};
	`
export default Services;
