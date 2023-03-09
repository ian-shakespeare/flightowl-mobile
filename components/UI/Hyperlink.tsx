import { StyledLink } from "../StyledElements";

type Props = {
  label: string;
  href: string;
};

const Hyperlink = ({ label, href }: Props) => {
  return (
    <StyledLink href={href} className="text-fo-purple text-lg">
      {label}
    </StyledLink>
  );
};

export default Hyperlink;
