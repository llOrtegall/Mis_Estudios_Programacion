interface PropsCard {
	name: string;
	username: string;
	avatar: string;
}

export function TwitterCard({ name, username, avatar }: PropsCard) {
	return (
		<article className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
			<header className="flex items-center gap-3 flex-1">
				<img
					src={`https://unavatar.io/${avatar}`}
					alt={username}
					className="w-12 h-12 rounded-full object-cover"
				/>
				<div className="leading-tight">
					<strong className="block text-slate-900 dark:text-slate-100">{name}</strong>
					<span className="text-slate-500 dark:text-slate-400">{'@' + username}</span>
				</div>
			</header>

			<aside className="self-auto">
				<button className="px-4 py-1.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900 cursor-pointer">
					Seguir
				</button>
			</aside>
		</article>
	)
}