import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { Header } from "../../styles/Headers";

interface ItemType {
  label: string;
  description: string;
  image: string;
}

const StyledHowItWorks = styled.div`
  display: flex;
  width: 100%;
  padding: var(--section-spacing);
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: var(--section-spacing-mobile);
  }
`;

const Items = styled.div`
  width: 100%;
  max-width: 140rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem;
`;

const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  padding: 3rem;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--blue);
  opacity: 0.3;
  border-radius: 2rem;
`;

const Number = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 2.4rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// const ItemImage = styled.div`
//   position: relative;
//   height: 8rem;
//   width: 8rem;
//   background-color: pink;
//   margin-bottom: 1.5rem;
// `;

const ItemHeader = styled.h4`
  position: relative;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
  text-align: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ItemDescription = styled.p`
  position: relative;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const HowItWorks = () => {
  const { t } = useTranslation();

  const items: ItemType[] = [
    {
      label: t("howItWorks.first.title"),
      description: t("howItWorks.first.description"),
      image: "",
    },
    {
      label: t("howItWorks.second.title"),
      description: t("howItWorks.second.description"),
      image: "",
    },
    {
      label: t("howItWorks.third.title"),
      description: t("howItWorks.third.description"),
      image: "",
    },
    {
      label: t("howItWorks.fourth.title"),
      description: t("howItWorks.fourth.description"),
      image: "",
    },
  ];

  return (
    <StyledHowItWorks>
      <Header>{t("howItWorks.title")}</Header>
      <Items>
        {items.map((item: ItemType, index: number) => (
          <Item key={item.label}>
            <Background />
            <Number>{`${index + 1}.`}</Number>
            {/* <ItemImage /> */}
            <ItemHeader>{item.label}</ItemHeader>
            <ItemDescription>{item.description}</ItemDescription>
          </Item>
        ))}
      </Items>
    </StyledHowItWorks>
  );
};

export default HowItWorks;
