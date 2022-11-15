export const normalizeDough = (dough) => {
  return {
    ...dough,
    className: dough.name === "Тонкое" ? "light" : "large",
    value: dough.name === "Тонкое" ? "small" : "big",
  };
};

export const normalizeSizes = (size) => {
  const getValue = () => {
    switch (size.name) {
      case "23 см":
        return "small";
      case "32 см":
        return "normal";
      default:
        return "big";
    }
  };

  return {
    ...size,
    value: getValue(),
  };
};

export const normalizeSauces = (sauce) => {
  return {
    ...sauce,
    value: sauce.name === "Томатный" ? "tomato" : "creamy",
  };
};

export const normalizeIngredients = (ingredient) => {
  const getValue = () => {
    switch (ingredient.name) {
      case "Грибы":
        return "mushrooms";
      case "Чеддер":
        return "cheddar";
      case "Салями":
        return "salami";
      case "Ветчина":
        return "ham";
      case "Ананас":
        return "ananas";
      case "Бекон":
        return "bacon";
      case "Лук":
        return "onion";
      case "Чили":
        return "chile";
      case "Халапеньо":
        return "jalapeno";
      case "Маслины":
        return "olives";
      case "Томаты":
        return "tomatoes";
      case "Лосось":
        return "salmon";
      case "Моцарелла":
        return "mozzarella";
      case "Пармезан":
        return "parmesan";
      default:
        return "blue_cheese";
    }
  };

  return {
    ...ingredient,
    value: getValue(),
    count: 0,
  };
};
