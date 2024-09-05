import styled from "styled-components";
import Divider from "../utils/Divider";

export const StyledPostItem = styled.section`
	background-color: ${props => props.theme.primary};
	border-radius: 10px;
	box-shadow: 0px 0px 2px ${props => props.theme.border};
	display: inherit;
	padding: 0.5em 1em;
	gap: 1em;
	@media (max-width: 700px) {
		border-radius: 0px;
	}
`;

export const StyledPostItemHeader = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledUserImage = styled.img`
	border-radius: 100px;
	border: 1px solid ${props => props.theme.border};
	width: 50px;
	aspect-ratio: 1 / 1;
`;

export const StyledUserInfo = styled.div`
	display: inherit;
	align-items: inherit;
	gap: 10px;
`;

export const StyledH1 = styled.h1`
	color: ${props => props.theme.text.primary};
`;

export const StyledTextSecondary = styled.p`
	color: ${props => props.theme.text.secondary};
`;

export const StyledStatisticsSection = styled.section`
	display: flex;
	justify-content: space-between;
	color: ${props => props.theme.text.accent};
`;

export const StyledRatingsSection = styled.section`
	display: flex;
	gap: 1em;
`;

export const StyledPostDivider = styled(Divider)`
	margin: 5px 0px;
`;

export const StyledPostActions = styled.section`
	display: flex;
`;

export const StyledPostButton = styled.button`
	background-color: transparent;
	color: ${props => props.theme.text.accent};
	border: none;
	padding: 0.5em;
	font-size: 1rem;
	flex: 1;
	display: flex;
	justify-content: center;
	gap: 10px;
	&:hover {
		background-color: ${props => props.theme.background};
	}
`;

export const StyledTextAction = styled.h5`
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;
