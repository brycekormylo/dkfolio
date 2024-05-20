const OpeningPhrase = () => {
  const openerText = [
    "Dive into the magic of custom landscape and wildlife photography, transforming any moment into a timeless masterpiece✨ The enchantment lies within the finer details. If you're geared up for some fun, let's kick-start the journey of crafting your own visual fairy tale and its limitless possibilities!",
  ];

  return (
    <div className="flex flex-col gap-4 px-4 py-12 text-center text-xs md:px-[28vw] md:text-sm">
      {openerText.map((content, i) => (
        <p key={i}>{content}</p>
      ))}
    </div>
  );
};

export default OpeningPhrase;
