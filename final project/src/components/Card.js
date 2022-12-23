import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {  
  return (
      <VStack bg="white" borderRadius="10" alignItems="left">
        <Image src={imageSrc} alt={title} 
          objectFit="cover" borderRadius="10" />
        <Heading color="black">{title}</Heading>
        <Text color="black">{description}</Text>
        <HStack>
          <Text color="black">See more</Text>
          <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    );
};

export default Card;
