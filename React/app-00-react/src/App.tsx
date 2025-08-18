import { TwitterCard } from "./components/TwitterCard";

export function App() {
	return (
		<div className="w-96 mx-auto py-24">
			<TwitterCard
				name="John Doe"
				username="johndoe"
				avatar="johndoe"
			/>
			<TwitterCard
				name="Miguel Angel Duran"
				username="midudev"
				avatar="midudev"
			/>
			<TwitterCard
				name="Ivan Ortega Garzon"
				username="llortegall"
				avatar="llortegall"
			/>
			<TwitterCard
				name="Pablo Hernandez"
				username="pheralb"
				avatar="pheralb"
			/>
		</div>
	)
}