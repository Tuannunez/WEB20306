import Button from "./Button";
function TourCard(props) {
    return (
        <div className="
            bg-white 
            rounded-xl 
            shadow-xl 
            hover:shadow-2xl 
            transition duration-300 
            overflow-hidden 
            p-4 
            flex flex-col 
        ">
            <div className="h-48 overflow-hidden rounded-lg">
                <img
                    src={props.image}
                    alt={props.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500" 
                />
            </div>
            <h3 className="font-bold text-lg text-center mt-4 mb-4 text-red-900 grow">
                {props.title}
            </h3>
            <div className="flex justify-between mt-4">
                <Button label="Xem chi tiết" variant="secondary" />
                <Button label="Đặt tour" variant="primary" />
            </div>
        </div>
    );
}
export default TourCard;