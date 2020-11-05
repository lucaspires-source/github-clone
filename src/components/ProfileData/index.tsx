import React from 'react';

import { Container,Flex } from './styles';

interface Props {
    username:string;
    name:string;
    avatarUrl:string;
    followers:number;
    following:number;
    company?:string;
    location?:string;
    email?:string;
    blog?:string;
}

const ProfileData: React.FC<Props> = ({
    username ,
    name ,
    avatarUrl ,
    followers ,
    following ,
    company, 
    location ,
    email ,
    blog ,
  )} => {
      return(
          <Container>

          </Container>
      )
  }

export default ProfileData;