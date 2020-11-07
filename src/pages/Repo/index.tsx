import React from 'react';
import { Link } from 'react-router-dom';
import { RepoIcon } from '../Profile/styles';
import { Breadcrumb, Container,Stats,StarIcon,LinkButton,ForkIcon,GithubIcon } from './styles';

const Repo  = () => {
  return (
      <Container>
          <Breadcrumb>
            <RepoIcon/>
            <Link className={"username"} to={"lucaspires"}>
                lucaspires
            </Link>
            <span></span>
            <Link className={"reponame"} to={"/lucaspires/pokedex"}>
                Pokedex
            </Link>

          </Breadcrumb>
          <p>a POKEDEX MADE WITH REACT</p>
          <Stats>
            <li>
                <StarIcon />
                <b>9</b>
                <span>stars</span>
            </li>
            <li>
                <ForkIcon />
                <b>0</b>
                <span>forks</span>
            </li>
      </Stats>
      <LinkButton href={"https://github.com/lucaspires-source/pokedex"}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
      </Container>
  )
}

export default Repo;