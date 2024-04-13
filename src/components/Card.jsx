import { data } from "../data";

const Card = () => {
  return (
    <div className="text-textColor">
      {data.map(({ title, description }, index) => (
        <div key={index} className="pb-28">
          <h1 className="font-oswald text-9xl pb-10">{title}</h1>
          <h1 className="text-3xl">{description}</h1>
        </div>
      ))}
    </div>
  );
};

export default Card;
