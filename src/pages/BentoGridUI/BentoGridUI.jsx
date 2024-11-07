import {
  AIContent,
  AudienceGrowth,
  ConsistentScheduling,
  CreatePostButton,
  GrowFollowers,
  MultiplePlatforms,
  ScheduleToSocialMedia,
  Stars,
} from "./assets";

const BentoGridUI = () => {
  return (
    <div className="bg-[#f5f5f5] dm-sans-medium select-none">
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-rows-1 sm:grid-rows-2 p-10 gap-10">
        <div className="row-span-1 bg-[#faeee2] select-none p-10 rounded-3xl">
          <h1 className="text-[4rem] tracking-[-0.07em] leading-[3rem] mb-10">
            Create and schedule content{" "}
            <span className="text-[#8f3fd9] dm-sans-medium-italic">
              quicker.
            </span>
          </h1>
          <img
            src={CreatePostButton}
            draggable="false"
            alt="create post button"
            className="w-[25rem] mx-auto"
          />
        </div>

        <div className="col-span-2 bg-[#7651dc] flex items-center flex-col justify-center text-white rounded-3xl">
          <h1 className="text-[5rem] text-center leading-[5rem] mx-16 mb-4">
            Social Media <span className="text-[#fac981]">10x </span>
            <span className="dm-sans-medium-italic">Faster</span> with AI
          </h1>
          <img src={Stars} alt="stars" className="w-[18rem] mx-auto" />
          <p className="text-[1.7rem] mt-3">Over 4,000 5-star reviews</p>
        </div>

        <div className="row-span-1 xl:row-span-2 bg-[#dcd1fc] p-10 rounded-3xl">
          <h1 className="text-[3.2rem] leading-[3rem] mb-8">
            Schedule to social media.
          </h1>
          <img src={ScheduleToSocialMedia} alt="schedule posts" />
          <p className="text-[2rem] text-[#3f3856] leading-[2.2rem] mt-12">
            Optimize past timings to publish content at the perfect time for
            your audience.
          </p>
        </div>

        <div className="row-span-3 bg-[#ffcc69] rounded-3xl px-10 py-5">
          <h1 className="my-5 mr-7 text-[4rem] leading-[3.6rem] tracking-tighter">
            Write your content using AI.
          </h1>
          <img src={AIContent} alt="AI Content" className="pt-20 pb-5" />
        </div>

        <div className="row-span-1 px-10 py-8 bg-white rounded-3xl">
          <img src={MultiplePlatforms} alt="multi platform" />
          <h1 className="mt-5 text-[3.1rem] leading-[2.6rem]">
            Manage multiple accounts and platforms.
          </h1>
        </div>

        <div className="row-span-1 bg-[#ffcc69] px-8 pt-2 rounded-3xl">
          <h1 className="my-5 text-[3.1rem] leading-[2.6rem]">
            Maintain a consistent posting schedule.
          </h1>
          <img
            src={ConsistentScheduling}
            alt="Consistent Schedule"
            className="pt-5"
          />
        </div>

        <div className="row-span-2 p-8">
          <h1 className="my-5 text-[7rem] leading-[2.6rem]">&gt;56%</h1>
          <p className="text-[2rem] text-[#7d7d7d] mt-8">
            faster audience growth
          </p>
          <img
            src={AudienceGrowth}
            alt="Audience Growth"
            className="w-[300px] mx-auto mt-8"
          />
        </div>

        <div className="row-span-2 col-span-2 bg-[#7651dc] flex items-center text-white p-10 rounded-3xl">
          <img src={GrowFollowers} className="w-[25rem]" alt="Grow Followers" />
          <h1 className="text-[3.8rem] leading-[3.4rem]">
            Grow followers with non-stop content.
          </h1>
        </div>
      </div>

      <div className="sm:hidden p-5 flex flex-col gap-y-8">
        <div className="col-span-2 bg-[#7651dc] text-center text-white rounded-3xl py-10 px-2">
          <h1 className="text-[3.5rem] leading-[3.4rem] mb-4">
            Social Media <span className="text-[#fac981]">10x</span>
            <span className="dm-sans-medium-italic">Faster</span> with AI
          </h1>
          <img
            src="./assets/stars.webp"
            alt="stars"
            className="w-[14rem] mx-auto"
          />
          <p className="text-[1rem] mt-3">Over 4,000 5-star reviews</p>
        </div>

        <div className="px-3 py-5 bg-white rounded-3xl">
          <img
            src="./assets/multiple-platforms.webp"
            alt="multi platform"
            className="bg-white"
          />
          <h1 className="mt-5 text-[1.6rem] leading-[1rem]">
            Manage multiple accounts and platforms.
          </h1>
        </div>

        <div className="px-3 pt-5 bg-[#ffcc69] rounded-3xl">
          <h1 className="text-[2.1rem] leading-[1.5rem]">
            Maintain a consistent posting schedule.
          </h1>
          <img
            src="./assets/consistent-schedule.webp"
            alt="Consistent Schedule"
            className="pt-5"
          />
        </div>

        <div className="bg-[#dcd1fc] px-5 py-8 rounded-3xl">
          <h1 className="text-[2.5rem] leading-[2rem] mb-8">
            Schedule to social media.
          </h1>
          <img src="./assets/schedule-posts.webp" alt="schedule posts" />
          <p className="text-[0.9rem] text-[#3f3856] text-center leading-[1rem] mt-8">
            Optimize past timings to publish content at the perfect time for
            your audience.
          </p>
        </div>

        <div className="col-span-2 bg-[#7651dc] text-white px-10 py-7 rounded-3xl">
          <img
            src="./assets/grow-followers.webp"
            className="w-[25rem]"
            alt="Grow Followers"
          />
          <h1 className="text-[2rem] text-center leading-[2rem] mt-10 mb-4">
            Grow followers with non-stop content.
          </h1>
        </div>

        <div className="p-8">
          <h1 className="my-5 text-[4rem] leading-[2.6rem]">&gt;56%</h1>
          <p className="text-[1.3rem] text-[#7d7d7d] mt-6">
            faster audience growth
          </p>
          <img
            src="./assets/audience-growth.webp"
            alt="Audience Growth"
            className="w-[230px] mt-8"
          />
        </div>

        <div className="text-[2.3rem] bg-[#faeee2] select-none px-5 py-8 rounded-3xl">
          <h1 className="tracking-[-0.05em] leading-[3rem] mb-7">
            Create and schedule content
            <span className="text-[#8f3fd9] dm-sans-medium-italic">
              quicker.
            </span>
          </h1>
          <img
            src="./assets/create-post-button.webp"
            draggable="false"
            alt="create post button"
            className="w-[15rem]"
          />
        </div>

        <div className="bg-[#ffcc69] rounded-3xl px-5 py-5">
          <h1 className="my-5 mr-7 text-[2.3rem] leading-[2rem] tracking-tighter">
            Write your content using AI.
          </h1>
          <img
            src="./assets/ai-content.webp"
            alt="AI Content"
            className="pt-6 pb-5 w-[270px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BentoGridUI;
