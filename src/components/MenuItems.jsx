const testitems = [
  // { item1: "about", link: "/#about" },
  { item1: "featured work", link: "/#featured-work" },
  { item1: "creative concepts", link: "/#creative-concepts " },
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
