import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { Header } from "../../styles/Headers";

import a from "../../assets/how-it-works/a.jpeg";
import b from "../../assets/how-it-works/b.jpeg";
import c from "../../assets/how-it-works/c.jpeg";
import d from "../../assets/how-it-works/d.jpeg";

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

const ItemImage = styled.img`
  position: relative;
  height: 12rem;
  background-color: pink;
  margin-bottom: -1rem;
  mix-blend-mode: multiply;
  transform: scale(1.05);
`;

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
      image: a,
    },
    {
      label: t("howItWorks.second.title"),
      description: t("howItWorks.second.description"),
      image: b,
    },
    {
      label: t("howItWorks.third.title"),
      description: t("howItWorks.third.description"),
      image: c,
    },
    {
      label: t("howItWorks.fourth.title"),
      description: t("howItWorks.fourth.description"),
      image: d,
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
            <ItemImage src={item.image} />
            <ItemHeader>{item.label}</ItemHeader>
            <ItemDescription>{item.description}</ItemDescription>
          </Item>
        ))}
      </Items>
    </StyledHowItWorks>
  );
};

export default HowItWorks;
