import React from 'react';
import { Container, Main, LeftSide, RightSide, Repos} from './styles';
import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile = () => {
  return (
    <Container>
        <Main>
          <LeftSide>
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
          </LeftSide>
          <RightSide>
            <Repos>
              <h2>Pinned</h2>

              <div>
                {[1,2,3,4,5,6].map(n =>(
                  <RepoCard
                    key={n}
                    username={"lucaspires"}
                    reponame={"pokedex"}
                    description={"a POKEDEX MADE WITH REACT"}
                    language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                    stars={8}
                    forks={4}
                  />
                ))}
              </div>
            </Repos>
          </RightSide>
        </Main>
    </Container>
  );
};
export default Profile;
