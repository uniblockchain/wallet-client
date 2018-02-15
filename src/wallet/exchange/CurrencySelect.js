// @flow
import React from 'react';
import styled from 'styled-components';
import images from './img';
import CurrencyName from '../CurrencyName';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  width: 36px;
  margin-right: 25px;
`;

const SmallText = styled.p`
  font-size: 12px;
  color: #a1a1a1;
  margin-bottom: 0px;
  width: max-content;
`;

const CurrencySelectContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledSelect = styled.select`
  font-family: Usual;
  background-color: white;
  border: none;
  font-size: 24px;
  padding: 0;
`;

const CurrencySelect = ({ input, wallets, text }: any): any => {
  let activeWallet = wallets.find(w => w.id === Number(input.value));
  if (!activeWallet) {
    activeWallet = wallets ? wallets[0] : null;
  }
  if (!activeWallet) {
    return null;
  }
  const currency = CurrencyName.get(activeWallet.currency);
  return (
    <CurrencySelectContainer>
      <ImageContainer>
        <Img src={images[activeWallet.currency]} alt={currency} />
      </ImageContainer>
      <div>
        <StyledSelect {...input}>
          {wallets.map(w => (
            <option value={w.id} key={w.id}>
              {w.currency}
            </option>
          ))}
        </StyledSelect>
        <SmallText>
          {text} {currency}
        </SmallText>
      </div>
    </CurrencySelectContainer>
  );
};

export default CurrencySelect;
