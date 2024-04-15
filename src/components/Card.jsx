import { data } from "../data";

const Card = () => {
  return (
    <div>
      {data.map(({ title, description, source }, index) => (
        <div
          key={index}
          className="pb-28">
          <h1 className="text-titleColor font-oswald text-9xl pb-10">{title}</h1>
          <h1 className="text-textColor text-3xl mr-16">{description}</h1>
          {/* <div>
            <iframe
              src={source.src}
              width={source.width}
              height={source.height}
              frameBorder={source.frameBorder}
              allow={source.allow}
              title={title}></iframe>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Card;
