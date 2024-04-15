import { data } from "../data";

const Video = () => {
  return (
    <div>
      {data.map(({ title, source }, index) => (
        <div key={index}>
          <iframe
            src={source.src}
            width={source.width}
            height={source.height}
            frameBorder={source.frameBorder}
            allow={source.allow}
            title={title}></iframe>
        </div>
      ))}
    </div>
  );
};

export default Video;
