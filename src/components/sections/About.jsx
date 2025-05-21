const items = [
  {
    paragraph:
      "I'm based in Joshua Tree, CA. Its a place which inpires many colors I became interested in programming when I wanted to bring my own passion projects to life",
  },
  {
    paragraph:
      "My days are spent creating niche websites and solutions for small business owners and creatives.",
  },
  {
    paragraph:
      " Expertise gained through project learning and combining unique niches. Tagline: 'the world is so niched now, I can help people combine their own random niches, and create unique niche!!!-' ",
  },
  {
    paragraph: " paragraph1: I've gained experience through project learning",
  },
  {
    paragraph:
      "paragraph1: PHP WP- y desire to learn js was initated by wanting to be more creative, and to build my 4 projects. By experiencing the process of building up these websites, I've gained not only an ability to work with unique colors, and to learn the skills needed to become a very developer.",
  },
];

const About = () => {
  return (
    <>
      <div
        id="paragraph-container"
        class=" ml-2 pl-1 2xl:pr-5 2xl:mr-5 mt-[90px]"
      >
        <p class="text-lg">
          Hi there, I'm Elsa. I help small business owners start and maintain
          their websites, along with content creation.
        </p>
      </div>
      {/*ABOUT  */}

      <section id="about-content-wrapper" class="opacity-90 hover:opacity-100 ">
        <div id="about-me" class="mb-5 pb-5  bg-">
          <img
            src="https://elsahovey.com/_astro/eh-img.BW9mBPY5_5k3C0.webp"
            alt=""
            class="2xl:w-1/2 w-3/4 mt-2  pr-5 pl-2"
          />
          <div id="about" class="pl-3 pt-5">
            <h2>About</h2>

            {items.map((item) => (
              <div>
                <p>{item.paragraph} </p>
              </div>
            ))}
          </div>
          <ul>
            <li>sm</li>
            <li>cta contact</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
