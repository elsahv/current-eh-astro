const testitems = [
  // { item1: "about", link: "/#about" },
  { item1: "laughing coyote dev", link: "/featured-work/#laughing-coyote-dev" },
  { item1: "other projects", link: "/#creative-concepts " },
  { item1: "contact", link: "/#contact" },
];

const MenuItems = () => {
  return (
    <>
      {testitems.map((testitem) => (
        <li>
          <a href={testitem.link}>{testitem.item1}</a>
        </li>
      ))}
    </>
  );
};

export default MenuItems;
