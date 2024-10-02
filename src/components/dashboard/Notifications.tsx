import styled from "styled-components/native";
import {normalizeh, normalizew} from "../../utils/helpers.ts";
import CustomText from "../custormElements/Text.tsx";

const Notifications = () => {
	const notifications = [
		"There’s a new app udate waiting for you...",
		"Check your subcription status",
		"Admin added new business and new apps...",
		"Renewed subcription for June, see details...",
		"Renewed subcription for June, see details..."
	]
	return <Container>
		{
			notifications?.map((item,index)=>{
				return <Notification key={index}>
					<Dot />
					<CustomText>{item}</CustomText>
				</Notification>
			})
		}

	</Container>
}
const Notification = styled.TouchableOpacity`
flex-direction: row;
	align-items: center;
  gap:  ${normalizeh(16)}px;;
`
const Dot = styled.View`
	height: ${normalizeh(26)}px;
	width: ${normalizew(26)}px;
	border-radius:${normalizeh(13)+normalizew(13)}px;
	background-color: ${({theme})=>theme.green};

`
const Container = styled.View`
  background-color: ${({ theme }) => theme.topBackground};
  padding: ${normalizeh(40)}px ${normalizew(40)}px;
  border-radius: ${normalizew(16) + normalizeh(16)}px;
  overflow: hidden;
  gap: ${normalizeh(30)}px;

	justify-content: space-between;
	position: relative;
`;

export default Notifications;
