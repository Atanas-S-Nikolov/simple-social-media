import { PropsWithChildren } from "react";
import Navbar from "../components/header/Navbar";

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}
