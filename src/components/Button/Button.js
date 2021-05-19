import CustomButton from 'react-bootstrap/Button';

const Button = ({ text, onClick })=>{
    return (
        <CustomButton className="Button" onClick={()=>onClick()} >{text}</CustomButton>
    );
}

export default Button;