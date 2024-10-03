// import image from "../assets/phone.png"
import iphone from "../assets/Mobile/iPhone_2 (1).jpg";
const Card = ({
  name,
  description,
  category,
  price = 50,
}: {
  name: string;
  description?: string;
  category?: string;
  price?: Number;
}) => {
  return (
    <div className="w-[255px]  flex flex-col gap-4   overflow-hidden shadow-lg  pb-3">
      <div className="">
        <img src={iphone} className="w-full" />
      </div>
      <div className="font-bold px-4">
        <p>name:{name}</p>
        <p>Price:{price.toLocaleString()}</p>
        <div>
          <p className="underline">
            <a href="">Call us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
