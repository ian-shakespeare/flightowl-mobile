import { StyledLink } from '../StyledElements'

type Props = {
    href: string
    text: string
}

const Hyperlink = ({ href, text }: Props) => {
    return (
        <StyledLink href={href} className='text-fo-purple text-lg'>
            {text}
        </StyledLink>
    )
}

export default Hyperlink
