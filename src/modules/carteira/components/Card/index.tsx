import React, { ReactElement } from "react";

import {
  Container,
  Content,
  Strip,
  TextCVV,
  View,
  Text,
  ViewInformation,
} from "./styles";

interface propsCard {
  data: {
    number: string;
    name: string;
    validate: string;
    cvv: string;
  };
  back: boolean;
  icon: ReactElement | boolean;
}

const Card: React.FC<propsCard> = ({ data, back, icon }) => {
  return (
    <Container>
      <Content>
        {back ? (
          <div className="flex flex-col justify-between w-full">
            <Strip></Strip>
            <div className="flex items-center justify-end gap-2 mb-10 mr-20 text-gray-300">
              <span className="text-xs text-white">CVV</span>
              <TextCVV fontSize="14px">{data.cvv}</TextCVV>
            </div>
          </div>
        ) : (
          <ViewInformation>
            <View>
              <Text bold fontSize="18px">
                {data.number || "XXXX XXXX XXXX XXXX"}
              </Text>
              <div className="flex items-end justify-between mt-4">
                <div>
                  <span className="text-xs text-white">Nome</span>
                  <Text fontSize="16px">{data.name || "Nome do titular"}</Text>
                </div>
                <div>
                  <span className="text-xs text-white">Validade</span>
                  <Text fontSize="14px">{data.validate || "MM/AA"}</Text>
                </div>
              </div>
            </View>
            {icon && icon}
          </ViewInformation>
        )}
      </Content>
    </Container>
  );
};

export default Card;
