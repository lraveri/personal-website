interface HeaderProps {
	title: string;
}

export default function Header({ title }: HeaderProps) {
	return (
		<h1 className="text-3xl font-bold mb-6 text-center sm:py-4 underline underline-color-teal">{title}</h1>
	);
}