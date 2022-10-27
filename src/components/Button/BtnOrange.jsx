import { BtnOrange } from './styled'

const Component = props => {
    return (
        <BtnOrange type={props.type} onClick={props.onClick}>
            {props.children}
        </BtnOrange>
    )
}

export default Component