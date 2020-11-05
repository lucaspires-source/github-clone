import React from "react";
import { Container, Main, LeftSide, RightSide } from "./styles";
import ProfileData from "../../components/ProfileData";

const Profile = () => {
  return (
    <Container>
      <Main>
        <LeftSide></LeftSide>
        <ProfileData
          username={"lucaspires"}
          name={"Lucas Ribeiro Pires"}
          avatarUrl={
            "https://avatars1.githubusercontent.com/u/60105171?s=460&u=288efdeb49c6a7d871e7aef918c36223962944bd&v=4"
          }
          followers={1}
          following={0}
          company={undefined}
          location={"Brasília, Brazil"}
          email={"pires.lucas94@gmail.com"}
          blog={"https://www.linkedin.com/in/lucas-ribeiro-pires-0b4516140/"}
        />
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};
export default Profile;
