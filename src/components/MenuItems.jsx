const testitems = [
  { item1: "featured site", link: "/#featured-site" },
  { item1: "creative ideas", link: "/#side-projects" },
  { item1: "work with me", link: "/#work-with-me" },
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
