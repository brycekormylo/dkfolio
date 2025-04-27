const OpeningPhrase = () => {
	const openerText = [
		"Dive into the magic of custom landscape and wildlife photography, transforming any moment into a timeless masterpiece✨ The enchantment lies within the finer details. If you're geared up for some fun, let's kick-start the journey of crafting your own visual fairy tale and its limitless possibilities!",
	];

	return (
		<div className="flex flex-col gap-4 py-12 px-4 text-xs text-center md:text-sm md:px-[28vw]">
			{openerText.map((content) => (
				<p key={content}>{content}</p>
			))}
		</div>
	);
};

export default OpeningPhrase;
