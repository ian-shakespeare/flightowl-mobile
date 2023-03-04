import { StyledView } from '../StyledElements'
import Hyperlink from './Hyperlink'

const Nav = () => {
    return (
        <StyledView className='container h-12 flex-row items-center px-8 justify-end'>
            <Hyperlink href='/login' text='Login' />
        </StyledView>
    )
}

export default Nav
