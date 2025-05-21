import { IoOpenOutline } from "react-icons/io5";

const FeaturedWork = () => {
  return (
    <section
      id="featured-work-wrapper"
      class=" opacity-100 hover:opacity-80 my-5 pt-5 py-5 md:pl-5 pl-1 bg-"
    >
      <div id="" class="mt-5 ">
        <div id="" class="md:mr-5 mx-0">
          <div class="pb-2 font- text-">
            <div id="paragraph-container" class="font- 2xl:pr-5 2xl:mr-5">
              <h1 id="featured work-title" class="font- 2xl:text-4xl text-3xl ">
                Featured Work
              </h1>
              <p class="pt-1 text-lg">
                Most of my time is spent working on my latest venture:
                <span class="font-bold text-munsell">
                  {" "}
                  <a href="/laughing-coyote-dev">Laughing Coyote Dev. </a>
                </span>
                This website is a web design service for small businesses and
                creatives... and a way to push my creativity to the limits, all
                while exploring side hustle potential.
              </p>

              {/* <p class="pt-3">
                CREATE SHORTER VERSION::::1st paragraph, elaborate and
                explanation of lc/ Core Idea: Position your service as a digital
                atelier—a creative studio where your clients' visions are
                translated into vivid, handcrafted websites. Think of each site
                as a collaborative artwork: your client brings the inspiration,
                and you bring the technical brushstrokes "What separates web
                developers from Ai? Human innovation!
              </p> */}

              <a href="/laughing-coyote-dev">
                {/* <div class="mt-1 pl-1 flex items-center text-carribean">
                  <IoOpenOutline />
                  about
                </div>{" "} */}
                <div id="img-wrapper" class="  bg-">
                  <img
                    src="https://dl.dropboxusercontent.com/scl/fi/36vnm2e663uln6akmex4d/lc.png?rlkey=lgim54nbp0u11mviylee29hyj&st=1nuybim1&dl=0"
                    alt=""
                    class="border border-gray-300 mt-5"
                  />
                </div>
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
