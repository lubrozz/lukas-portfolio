


interface Props {
    children: string;
    color: string;
    //color?: 'primary' | 'secondary' | 'danger'        <--- this way to make sure the passed color is ONLY one of these options.
    onClick: () => void; // function that returns void
}


const Button = ({children, onClick, color = 'primary'}: Props) => {     //specify which elements from the interface to use. This way the names can be used. Otherwise you would only be able to use Props.
    return (
        <button className={'btn btn-' + color } onClick={onClick}>{ children }</button>
        /**
         * className has the {} to be able to use the variable color. Here it is used to append to the string. This makes the button dynamic.
         * onClick is an event. Here it uses the dynamic function that returns void.
         * Again the {} are used to be able to use the children variable from the interface.
         */
    )
}

export default Button