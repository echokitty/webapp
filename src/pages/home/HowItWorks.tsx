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
  text-align: center;
`;

const ItemDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
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
