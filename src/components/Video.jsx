// import { data } from "../data";

const Video = () => {
  return (
    <div>
      {/* {data.map(({ source }, index) => (
        <div key={index}>{source}</div>
      ))} */}
      <iframe
        width="800"
        height="415"
        src="https://www.youtube.com/embed/ERmtjRqWNcY?si=QMgC9C6Dp1Buiori"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
  );
};

export default Video;
