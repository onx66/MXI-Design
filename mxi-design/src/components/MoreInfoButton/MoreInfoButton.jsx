import "./MoreInfoButton.css";
import { useNavigate } from "react-router-dom";


function MoreInfoButton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/product-detail");
    };
    return (
        <button className="more-info-button" onClick={handleClick}>
            <span>Learn More</span>
        </button>
    )
}

export default MoreInfoButton;