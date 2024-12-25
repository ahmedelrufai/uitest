import React, {useState} from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/HomeStack.tsx";
import styled from "styled-components/native";
import CustomText from "../components/custormElements/Text.tsx";
import useStore from "../store/store.ts";
import { normalizeh, normalizew } from "../utils/helpers.ts";
import { SafeAreaView, ScrollView } from "react-native";
import { darkTheme, lightTheme } from "../utils/theme.ts";
import Activity from "../components/dashboard/Activity.tsx";
import Services from "../components/dashboard/Services.tsx";
import Notifications from "../components/dashboard/Notifications.tsx";
import CustomButton from "../components/custormElements/CustomButton.tsx";
const AddIconOnDark = require("../assets/images/AddIconOnDark.png");
const AddIconOnLight = require("../assets/images/AddIconOnLight.png");
const SearchIconOnDark = require("../assets/images/SearchIconOnDark.png");
const SearchIconOnLight = require("../assets/images/SearchIconOnLight.png");
const ServicesIcon = require("../assets/images/ServicesIcon.png");
const BusinessIcon = require("../assets/images/BusinessIcon.png");
const HandBuggerIcon = require("../assets/images/HandBuggerIcon.png");

const BackIcon = require("../assets/test/BackIcon.png");
const Baby = require("../assets/test/Baby.png");
const CalendarDots = require("../assets/test/CalendarDots.png");
const CheckBoxOnly = require("../assets/test/CheckboxOnly.png");
const CheckBoxActive = require("../assets/test/CheckBoxActive.png");
const ArrowRight = require("../assets/test/ArrowRight.png");

const Clock = require("../assets/test/Clock.png");
const Egg = require("../assets/test/Egg.png");
const ListBackground = require("../assets/test/ListBackground.png");
const lists = [
	{
		img:Baby,
		title:"Short Term",
		text:"Around 1 - 2 years"
	},
	{
		img:Clock,
		title: "Medium Term",
		text:"Around 2 - 3 years"
	},
	{
		img: CalendarDots,
		title: "Long Term",
		text: "Around 3 - 5 years"
	},
	{
		img:Egg,
		title: "Very Long Term",
		text: "Around 5 - 20+ years"
	}
]

interface DashboardProps extends NativeStackScreenProps<RootStackParamList, "Dashboard"> {}

const Dashboard: React.FunctionComponent<DashboardProps> = ({ navigation }) => {
	const { activeTheme } = useStore();
	const [activeList, setActiveList] = useState("Short Term")
	return (
		<Container>



			{/*<ItemsWrapper>*/}
			{/*	<Header>*/}
			{/*		<CustomText size={40} weight={500}>*/}
			{/*			Overview*/}
			{/*		</CustomText>*/}
			{/*		<ActionsWrapper>*/}
			{/*			<CustomButton onPress={()=>null}>*/}
			{/*				<Icon resizeMode={"contain"} source={activeTheme === "dark" ? SearchIconOnDark : SearchIconOnLight} />*/}
			{/*			</CustomButton>*/}
			{/*			<CustomButton onPress={()=>null}>*/}
			{/*				<Icon resizeMode={"contain"} source={activeTheme === "dark" ? AddIconOnDark : AddIconOnLight} />*/}
			{/*			</CustomButton>*/}

			{/*			<CustomButton onPress={() => {*/}
			{/*				// @ts-ignore*/}
			{/*				return navigation?.openDrawer();*/}
			{/*			}}>*/}
			{/*				<Icon resizeMode={"contain"} source={HandBuggerIcon} />*/}
			{/*			</CustomButton>*/}
			{/*		</ActionsWrapper>*/}
			{/*	</Header>*/}

			{/*	<TopWrapper>*/}
			{/*		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: normalizeh(40), flexDirection: "row", paddingRight: normalizew(160) }}>*/}
			{/*			<TopItem colorType={"lightBlue"}>*/}
			{/*				<TopItemInnerWrapper>*/}
			{/*					<CustomText color={lightTheme.text} size={38}>*/}
			{/*						Services*/}
			{/*					</CustomText>*/}
			{/*					<CustomText color={lightTheme.text} weight={600} size={64}>*/}
			{/*						123*/}
			{/*					</CustomText>*/}
			{/*				</TopItemInnerWrapper>*/}
			{/*				<ItemImage resizeMode={"contain"} source={ServicesIcon} />*/}
			{/*			</TopItem>*/}
			{/*			<TopItem colorType={"lightGreen"}>*/}
			{/*				<TopItemInnerWrapper>*/}
			{/*					<CustomText color={lightTheme.text} size={38}>*/}
			{/*						Business*/}
			{/*					</CustomText>*/}
			{/*					<CustomText color={lightTheme.text} weight={600} size={64}>*/}
			{/*						3*/}
			{/*					</CustomText>*/}
			{/*				</TopItemInnerWrapper>*/}
			{/*				<ItemImage resizeMode={"contain"} source={BusinessIcon} />*/}
			{/*			</TopItem>*/}
			{/*		</ScrollView>*/}
			{/*	</TopWrapper>*/}
			{/*	<ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: normalizeh(40), paddingBottom: normalizeh(300) }}>*/}
			{/*		<Activity />*/}
			{/*		<Services />*/}
			{/*		<Notifications />*/}
			{/*	</ScrollView>*/}
			{/*</ItemsWrapper>*/}
			<TestHeader>
			<TopIconTest style={{height:32,width:32}} source={BackIcon} />
				<TestOuterLine>
					<TestInnerLine>

					</TestInnerLine>
				</TestOuterLine>
				<TestClick>
					<TestClickText>
						Skip
					</TestClickText>
				</TestClick>
			</TestHeader>

			<TopTestText>
				How long do you plan to invest crypto?
			</TopTestText>
			<TestWrapper>
				{
					lists.map(item=>{
						const active = item.title===activeList;
						return <ListItem key={item.title} active={active} onPress={()=>setActiveList(item.title)} >
               <InnerWrapper style={{flexDirection:"row",gap:20,alignItems:"center"}}>

                <TopIconTest style={{width:32,height:32,tintColor:active?"#9333EA":"#4b5563"}} source={item.img} />
                <InnerWrapper>
	                <TestText style={{fontWeight:500,fontSize:18}}>
		                {item.title}
	                </TestText>
	                <TestText>
		                {item.text}
	                </TestText>
                </InnerWrapper>
               </InnerWrapper>
							<TopIconTest style={{width:32,height:32}} source={!active?CheckBoxOnly:CheckBoxActive} />

						</ListItem>
					})
				}
				<SubmitBtn>
					<TestClickText style={{color:"#fff",fontSize:22}}>
						Continue
					</TestClickText>
					<TopIconTest style={{width:24,height:24}} source={ArrowRight} />

				</SubmitBtn>
			</TestWrapper>
		</Container>
	);
};
const SubmitBtn = styled.TouchableOpacity`
width:100%;
	background-color: #9333EA;
	margin-top: 20px;
	height: 48px;
	border-radius: 24px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 10px;
	
`
const InnerWrapper = styled.View`
flex-direction: column;
	gap: 10px; 
`
const TestText = styled.Text`

`
const ListItem = styled.TouchableOpacity<{active:boolean}>`
width: 100%;
	height: 80px;
	background-color: #fff;
	border: 1px solid ${({active})=>active?"#9333EA":"#edf1f3"};
	border-radius: 20px;
	padding: 20px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
const TestWrapper = styled.View`
 gap: 20px;
	padding: 10px 20px;
`
const TopTestText = styled.Text`
color: #1F2937;
	font-weight: 600;
	font-size: 30px;
	padding: 30px;
	width: 100%;
	text-align: center;
`
const TestOuterLine=styled.View`
width: 180px;
	border: 1px solid  #9333EA;
	border-radius: 4px;
`
const TestInnerLine = styled.View`
 background-color:  #9333EA;
	height: 4px;
	width: 90px;
`
const TestClick = styled.TouchableOpacity`

`
const TestClickText = styled.Text`
	font-size: 22px;
	font-weight: 500;
	color: #9333EA;
`
const TestHeader = styled.View`
width: 100%;
	flex-direction: row;
	justify-content: space-between;
	background-color: #ffffff;
 align-items: center;
	padding: 20px;
`
const TopIconTest = styled.Image`

  aspect-ratio: 1;
`;
//
// const ChartWrapper = styled.View``;
//
// const TopItemInnerWrapper = styled.View`
//   gap: ${normalizeh(16)}px;
// `;
//
// const TopWrapper = styled.View`
//   flex-direction: row;
//   gap: ${normalizew(40)}px;
// `;
//
// const ItemImage = styled.Image`
//   width: ${normalizew(128)}px;
//   max-width: ${normalizew(128)}px;
//   height: auto;
//   aspect-ratio: 1;
// `;
//
// const TopItem = styled.View<{ colorType: string }>`
//   padding: ${normalizeh(40)}px ${normalizew(40)}px;
//   height: ${normalizeh(216)}px;
//   width: 56%;
//   background-color: ${({ colorType, theme }) => theme[colorType]};
//   justify-content: space-between;
//   border-radius: ${normalizeh(22)}px;
//   flex-direction: row;
// `;
//
// const Btn = styled(CustomButton)`
//
// `;
//
// const Icon = styled.Image`
//   width: ${normalizew(60)}px;
//   max-width: ${normalizew(60)}px;
//   aspect-ratio: 1;
// `;
//
// const ActionsWrapper = styled.View`
//   flex-direction: row;
//   gap: ${normalizew(32)}px;
//   align-items: center;
// `;
//
// const Header = styled.View`
//   width: 100%;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   height: ${normalizeh(64)}px;
// `;

const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  //background-color: ${({ theme }) => theme.background};
	background-color: #f9fafc;
`;

// const ItemsWrapper = styled.View`
//   padding: ${normalizeh(40)}px ${normalizew(40)}px;
//   gap: ${normalizeh(40)}px;
// `;

export default Dashboard;
