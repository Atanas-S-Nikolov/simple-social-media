import { SelectedTabButton, StyledTabButton } from "./TabButton.styled";
import { TabButtonProps } from "../../appTypes/props/TabButton";

export default function TabButton(props: TabButtonProps) {
	const { selected, ...buttonProps } = props;
	const TabElement = selected ? SelectedTabButton : StyledTabButton;

	return <TabElement {...buttonProps} />;
}
