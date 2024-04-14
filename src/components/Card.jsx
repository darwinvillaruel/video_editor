import { data } from "../data";

const Card = () => {
  return (
    <div>
      {data.map(({ title, description }, index) => (
        <div key={index} className="pb-28">
          <h1 className="text-titleColor font-oswald text-9xl pb-10">
            {title}
          </h1>
          <h1 className="text-textColor text-3xl mr-16">{description}</h1>
        </div>
      ))}
    </div>
  );
};

export default Card;
