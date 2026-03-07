import "./MoreInfoButton.css";
import { useNavigate } from "react-router-dom";


function MoreInfoButton({ productId = 0 }) {
    const navigate = useNavigate();
    const handleClick = () => {
       navigate(`/product-detail/${productId}`);
    };
    return (
         <button className="more-info-button" onClick={handleClick} data-testid="learn-more-button">
            <span>Learn More</span>
        </button>
    )
}

export default MoreInfoButton;