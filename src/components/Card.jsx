import { data } from "../data";

const Card = () => {
  return (
    <div className="text-textColor grid grid-cols-3 auto-rows-[300px] gap-4">
      {data.map(({ title, description }, index) => (
        <div key={index}>
          <h1>{title}</h1>
          <h1>{description}</h1>
        </div>
      ))}
    </div>
  );
};

export default Card;
