import RootLayout from "../layouts/Layout";
import PostsContainer from "../components/posts/PostsContainer";

export default function HomePage() {
	return (
		<RootLayout>
			<PostsContainer />
		</RootLayout>
	);
}
