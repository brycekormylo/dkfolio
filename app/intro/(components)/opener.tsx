const OpeningPhrase = () => {
  const openerText = [
    "Dive into the magic of custom film landscape and wildlife photography, transforming any moment into a timeless masterpiece✨ If you're ready to capture the magic, let's start creating your own visual fairy tale and explore all the possibilities!",
  ];

  return (
    <div className="flex flex-col gap-4 px-4 py-12 text-center text-xs md:px-[28vw] md:text-sm">
      {openerText.map((content, i) => (
        <p
          key={i}
        >
          {content}
        </p>
      ))}
    </div>
  );
};

export default OpeningPhrase;
