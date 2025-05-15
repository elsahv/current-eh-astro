import { IoOpenOutline } from "react-icons/io5";

const FeaturedSite = () => {
  return (
    <section
      id="featured-site"
      class="text-black opacity-100 hover:opacity-80 my-5 pt-5 py-5 md:pl-5 pl-1 bg-"
    >
      <div id="" class="mt-5 ">
        <div id="" class="md:mr-5 mx-0">
          <div class="pb-2 font-medium text-">
            <div id="paragraph-container" class="font- 2xl:pr-5 2xl:mr-5">
              <h1 id="work-with-me" class="font- 2xl:text-4xl text-3xl ">
                Work With Me
              </h1>
              <h3 class="pt-1 text-lg">
                Most of my time is spent on working on my new venture: Laughing
                Coyote Dev, a "Web Design service for small businesses and
                creatives. I built LC to challenge my creativeness and
                imagination, all while exploring a side hustle potential.
              </h3>
              {/* 
              <p>
                <a href="">see about for more info...</a>
              </p> */}

              {/*  */}
              <div id="img-wrapper" class="px-1 py-5">
                <a href="/laughing-coyote-dev">
                  <div class="flex items-center  text-xl pt-5 mt-5 ">
                    <IoOpenOutline /> <p class="pl-1"> view site</p>
                  </div>

                  <img
                    src="https://dl.dropboxusercontent.com/scl/fi/36vnm2e663uln6akmex4d/lc.png?rlkey=lgim54nbp0u11mviylee29hyj&st=1nuybim1&dl=0"
                    alt=""
                    class="border border-gray-300"
                  />
                </a>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSite;
