import { data } from "../data";

const Card = () => {
  return (
    <div>
      {data.map(({ title, description, source }, index) => (
        <div
          key={index}
          className="pb-12 lg:pb-28 sm:flex">
          <div className="w-[390px] sm:w-3/5 flex flex-col justify-center mb-5 pr-6 md:pr-12 lg:pr-36">
            <h1 className="text-titleColor font-oswald text-6xl sm:text-7xl md:text-8xl lg:text-9xl pb-5 sm:pb-14">
              {title}
            </h1>
            <p className="text-textColor sm:text-xl md:text-2xl lg:text-3xl">{description}</p>
          </div>
          <div className="lg:w-2/5 flex justify-center lg:border-l-2 ">
            <iframe
              src={source.src}
              className="lg:w-[394px] lg:h-[700px] sm:w-[281px] sm:h-[500px] w-[241px] h-[428px] rounded-lg"
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
