import React from "react";

const CategoryCard = ({
  name,
  image,
  emoji,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="group flex min-w-[70px] flex-col items-center gap-2"
    >
      <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-gray-50 shadow-sm transition group-hover:scale-105 group-hover:bg-orange-50">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-3xl">
            {emoji}
          </span>
        )}
      </div>

      <span className="text-xs font-medium text-gray-700">
        {name}
      </span>
    </button>
  );
};

export default CategoryCard;




{/* <CategoryCard
  name="Pizza"
  emoji="🍕"
/>

<CategoryCard
  name="Burger"
  emoji="🍔"
/>

<CategoryCard
  name="Biryani"
  emoji="🍛"
/>

<CategoryCard
  name="Dessert"
  emoji="🍰"
/>

<CategoryCard
  name="More"
  emoji="•••"
/> */}