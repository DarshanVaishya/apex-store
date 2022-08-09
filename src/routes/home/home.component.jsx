import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

function Home() {
	const categories = [
		{
			id: 1,
			title: "hats",
			imageUrl:
				"https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=1280&q=720",
		},
		{
			id: 2,
			title: "jackets",
			imageUrl:
				"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1280&q=720",
		},
		{
			id: 3,
			title: "sneakers",
			imageUrl:
				"https://images.unsplash.com/photo-1617152623457-4c9b639926d7?auto=format&fit=crop&w=1280&q=720",
		},
		{
			id: 4,
			title: "womens",
			imageUrl:
				"https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?auto=format&fit=crop&w=1280&q=720",
		},
		{
			id: 5,
			title: "mens",
			imageUrl:
				"https://images.unsplash.com/photo-1559582798-678dfc71ccd8?auto=format&fit=crop&w=1280&q=720",
		},
	];

	return (
		<div>
			<Outlet />
			<Directory categories={categories} />
		</div>
	);
}

export default Home;
