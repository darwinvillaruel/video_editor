import { data } from "../data";

const Card = () => {
  return (
    <div>
      {data.map(({ title, description, source }, index) => (
        <div key={index} className="pb-28 flex">
          <div className="w-3/5 flex flex-col justify-center pr-36">
            <h1 className="text-titleColor font-oswald text-9xl pb-14">
              {title}
            </h1>
            <p className="text-textColor text-3xl">{description}</p>
          </div>
          <div className="w-2/5 flex justify-center border-l-2 ">
            <iframe
              src={source.src}
              width={source.width}
              height={source.height}
              frameBorder={source.frameBorder}
              allow={source.allow}
              title={title}></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
