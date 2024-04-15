import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="mb-10 lg:mx-10 md:mx-5 sm:mx-2">
      <Header />
      <div>
        <Card />
        <p className="text-textColor text-2xl p-8 border-2 border-dashed rounded-2xl">
          A freelancer who specializes in video editing with 2-year work
          experience specializing in content creation, social media reel
          editing, and business advertising video editing. He has knowledge in
          videography since he is the one responsible in shooting the videos in
          every edit. Been using Capcut and social media built in editors like
          Instagram, Tiktok, and Facebook.
        </p>
      </div>
    </div>
  );
}

export default App;
