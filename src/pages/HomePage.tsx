import RootLayout from "../layouts/Layout";
import PostsContainer from "../components/posts/PostsContainer";
import Quote from "../components/quotes/Quote";

export default function HomePage() {
	return (
		<RootLayout>
			<Quote />
			<PostsContainer />
		</RootLayout>
	);
}
