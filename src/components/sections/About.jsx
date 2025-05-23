const items = [
  {
    paragraph:
      "I'm a web developer based in Joshua Tree, CA. I became interested in programming when I wanted to bring my own passion projects to life, and learned how to do so using javascript or php projects",
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
      <div id="intro" class=" ml-2 pl-1 2xl:pr-5 2xl:mr-5 mt-[90px]">
        <p class="text-lg">
          Hi there, I'm Elsa. I help small business owners start and maintain
          their websites, along with content creation.
        </p>
      </div>
      {/*ABOUT  */}

      <section
        id="about-content-wrapper"
        class="bg- opacity-90 hover:opacity-100 "
      >
        <div id="about-me" class="bg- mb-5 pb-5">
          <img
            src="https://dl.dropboxusercontent.com/scl/fi/v987mn7uciubojuyzt2l0/eh-img.jpg?rlkey=kud67wutqibhy9iwna9z50679&st=4vy6xe1e&dl=0"
            alt=""
            class="2xl:w-1/2 w-3/4 mt-2  pr-5 pl-2"
          />
          <div id="about" class="pl-3 pt-5">
            {items.map((item) => (
              <div>
                <p>{item.paragraph} </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
