const About = () => {
  return (
    <>
      <div id="about-intro" className=" ml-2 pl-1 2xl:pr-5 2xl:mr-5 mt-[90px]">
        <h1 class="text-2xl">Hi there, I'm Elsa...</h1>
        {/* <h2 id="tagline" className="text-lg pb-1">
          I declutter and build websites with neurodivergent users in mind, and
          help simplify the overwhelm
        </h2> */}
        <h2 id="tagline" className="text-lg pb-1">
          I declutter messy websites and turn them into clean, high-performing
          designs.
        </h2>
        <img
          src="https://dl.dropboxusercontent.com/scl/fi/heaqjsf9d0s5nkfe0t2lo/favicon.jpg?rlkey=slv7349isqhpw5wgwuylacv3f&st=ofkjioel&dl=0"
          alt="favicon"
          width={64}
          height={64}
          className="py-1 my-5 border border-slate-400 rounded"
        />
      </div>
      <section
        id="about-content-wrapper"
        className="bg- opacity-90 hover:opacity-100 "
      >
        <div id="about-me" className="bg- mb-5 pb-5">
          <img
            src="https://dl.dropboxusercontent.com/scl/fi/v987mn7uciubojuyzt2l0/eh-img.jpg?rlkey=kud67wutqibhy9iwna9z50679&st=4vy6xe1e&dl=0"
            alt=""
            className="2xl:w-1/2 w-3/4 mt-2  pr-5 pl-2"
          />
          <div id="about" className="pl-3 pt-5">
            <h3 className="font-bold text-xl">About</h3>
            <p className="">
              I'm a web developer based in Joshua Tree, CA... I work with
              Javascript frameworks, and dabble with Wordpress PHP. Expertise
              gained through project learning and combining unique niches.
            </p>
            <p className="my-1">
              My interests with programming started when I wanted to bring my
              own passion projects and tools to life. Each website project is
              built with my own interests in mind. a way to push my creativity
              to the limits, all while exploring side hustle potential.
            </p>
            <p>
              Now I do the same for other clients... my days are spent creating
              niche websites and solutions for small business owners and
              creatives. You can read more{" "}
              <a class="underline" href="/laughing-coyote-dev">
                here.
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
