const items = [
  {
    paragraph1: "I've gained experience through project learning",
    site1: "laughing Coyote dev",
    site2: "The Running quail",
  },
  {
    paragraph1:
      "PHP WP- y desire to learn js was initated by wanting to be more creative, and to build my 4 projects. By experiencing the process of building up these websites, I've gained not only an ability to work with unique colors, and to learn the skills needed to become a very ideal web developer.",
    site1: "Writing to Better Health",
    site2: "THe Indoor Jungle Project",
  },
];
const About = () => {
  return (
    <>
      <div
        id="paragraph-container"
        class=" ml-2 pl-1 2xl:pr-5 2xl:mr-5 mt-[90px]"
      >
        <p class="text-2xl pt-5">Hi there, I'm Elsa...</p>
        <p class="pb-1 mb-1 text-lg">
          I help small business owners start and maintain their websites, along
          with content creation.
        </p>
      </div>
      {/* ABOUT ME */}
      <section id="about-content-wrapper" class="opacity-90 hover:opacity-100 ">
        <div id="about-me" class="mb-5 pb-5  bg-">
          <img
            src="https://elsahovey.com/_astro/eh-img.BW9mBPY5_5k3C0.webp"
            alt=""
            class="2xl:w-1/2 w-3/4 mt-2  pr-5 pl-2"
          />
          <div id="about" class="pl-3 pt-5">
            <h2>About Me</h2>
            <p>
              "I'm based in Joshua Tree, CA. Its a place which inpires many
              colors I became interested in programming when I wanted to bring
              my own passion projects to life."
            </p>
            <p>
              "My days are spent creating niche websites and solutions for small
              business owners and creatives.",
            </p>
          </div>
        </div>

        {/*ABOUT PROJECTS */}
        <div id="about-" class="h- mt-5">
          <div id="" class="mt-5 2xl:pr-5 2xl:mr-5 pl-4 pr-3">
            {/* <h2 class="py-1">
      Tagline: "the world is so niched now, I can help people combine their own
      random niches, and create unique niche!!!- "  
    </h2>   */}

            <h2>
              Expertise gained through project learning and combining unique
              niches
            </h2>
            <div class="bg- pt-1 pb-5 mb-5 ">
              {items.map((item) => (
                <div className="">
                  <p class="">{item.paragraph1}</p>
                  <ul class=" list-disc pt-1 pl-5 pb-5 mb-5">
                    <li class="">{item.site1} </li>
                    <li class="">{item.site2} </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
