import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="mx-5 my-10 sm:mx-3 lg:mx-10">
      <Header />
      <div>
        <Card />
        <p className="text-textColor text-sm sm:text-xl md:text-2xl p-5 sm:p-8 border-2 border-dashed rounded-2xl">
          A freelancer who specializes in video editing with 2-year work experience specializing in content creation,
          social media reel editing, and business advertising video editing. He has knowledge in videography since he is
          the one responsible in shooting the videos in every edit. Been using Capcut and social media built in editors
          like Instagram, Tiktok, and Facebook.
        </p>
      </div>
    </div>
  );
}

export default App;
