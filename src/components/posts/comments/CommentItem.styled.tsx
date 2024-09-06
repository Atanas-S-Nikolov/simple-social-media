import styled from "styled-components";
import Typography from "../../common/Typography";

export const StyledComment = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 10px;
`;

export const StyledCommentImage = styled.img`
	border-radius: 100px;
	border: 1px solid ${(props) => props.theme.border};
	width: 40px;
	aspect-ratio: 1 / 1;
`;

export const StyledCommentInformation = styled.section`
	background-color: ${(props) => props.theme.secondary};
	border-radius: 20px;
	padding: 10px;
`;

export const StyledCommentActions = styled.section`
	display: flex;
	gap: 1rem;
`;

export const StyledLike = styled(Typography)`
	color: ${(props) => props.theme.text.secondary};
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;
