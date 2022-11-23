import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";


export const Home = (props) => {
    const navigate = useNavigate();
    return (
        <div className="Home">
            <img src="./Rocket.png" style={{width: "130px", height: "50%"}} className="App-logo" alt="logo"/>
            <p>
                Leofly team cubesat
            </p>
            <Button variant="contained" onClick={() => navigate("control_center")}>Control center</Button>

        </div>
    )
}