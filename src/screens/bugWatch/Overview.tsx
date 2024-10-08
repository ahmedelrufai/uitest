import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigations/HomeStack.tsx";
import useStore from "../../store/store.ts";
import styled from "styled-components/native";
import {normalizeh, normalizew} from "../../utils/helpers.ts";
import CustomText from "../../components/custormElements/Text.tsx";
const BgDark = require("../../assets/images/bugWatch/BugWatchOverviewBgDark.png");
const BgLight = require("../../assets/images/bugWatch/BugWatchOverviewBgLight.png");
const Logo = require("../../assets/images/bugWatch/BugWatchLogo.png");
interface DashboardProps extends NativeStackScreenProps<RootStackParamList, "Overview"> {}

const Overview: React.FunctionComponent<DashboardProps> = ({ navigation }) => {
	const { activeTheme } = useStore();
	const OverviewBg = activeTheme === "dark" ? BgDark : BgLight;

	return (
		<Container source={OverviewBg}>
			<Inner>
				<Image source={Logo} />
        <TextWrapper>
	        <CustomText weight={600}>Bug Watch:</CustomText>
	        <CustomText align={"center"} >Our SaaS solution simplifies error tracking and management. Bug watch empowers its team to stay ahead of issues and delivers seamless experience.</CustomText>
        </TextWrapper>
			</Inner>
		</Container>
	);
};

const Container = styled.ImageBackground`
  flex: 1;
justify-content: flex-end;
`;
const Inner = styled.View`
width: 100%;
	height: 70%;
	align-items: center;

	padding: ${normalizeh(64)}px;
	gap: ${normalizeh(64)}px;
	
`
const TextWrapper = styled.View`
align-items: center;
  margin-top: ${normalizeh(200)}px;
`
const Image = styled.Image`
width: ${normalizew(266)}px;
  max-width: ${normalizew(266)}px;
  height: ${normalizew(266)}px;


`
export default Overview;
