import styled from "styled-components";
import { Header } from "../../styles/Headers";

interface ItemType {
  label: string;
  description: string;
  image: string;
}

const items: ItemType[] = [
  {
    label: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "",
  },
  {
    label: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "",
  },
  {
    label: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "",
  },
  {
    label: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "",
  },
];

const StyledHowItWorks = styled.div`
  display: flex;
  width: 100%;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
`;

const Items = styled.div`
  width: 100%;
  max-width: 140rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
`;

const ItemImage = styled.div`
  height: 8rem;
  width: 8rem;
  background-color: pink;
  margin-bottom: 1.5rem;
`;

const ItemHeader = styled.h4`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
`;

const ItemDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
`;

const HowItWorks = () => {
  return (
    <StyledHowItWorks>
      <Header>How it works</Header>
      <Items>
        {items.map((item: ItemType) => (
          <Item key={item.label}>
            <ItemImage />
            <ItemHeader>{item.label}</ItemHeader>
            <ItemDescription>{item.description}</ItemDescription>
          </Item>
        ))}
      </Items>
    </StyledHowItWorks>
  );
};

export default HowItWorks;
