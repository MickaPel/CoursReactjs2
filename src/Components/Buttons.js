import "../styles/Button.css";
import {useNavigate} from 'react-router-dom';


export const Btn = ({action, txt, loading=false, disabled=false}) => {
    return (
        <button disabled={disabled} onClick={action}>
            {(!loading) ? txt : <span className="bounce" />}
        </button>
    )
}

    export const BtnBack = () => {
        const navigate = useNavigate();

        const goBack = () => {
        navigate(-1);
    }
        return (
            <button onClick={goBack}>
                Retour
            </button>
        )
    }