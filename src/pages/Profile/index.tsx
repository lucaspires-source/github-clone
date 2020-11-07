import React from 'react';
import { Container, Main, LeftSide, RightSide, Repos,CalendarHeading,Tab } from './styles';
import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';
import { RepoIcon } from '../../components/RepoCard/styles';
const Profile = () => {

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number"></span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>
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
              <Tab className= "mobile">
                <TabContent/>
                <span className= "line"/>
              </Tab>
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
            <CalendarHeading>
              This calendar does not represent actual data
            </CalendarHeading>
            <RandomCalendar/>
          </RightSide>
        </Main>
    </Container>
  );
};
export default Profile;
