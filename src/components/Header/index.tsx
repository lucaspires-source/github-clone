import React from 'react'
import { Container, GithubLogo, SearchForm} from './styles'
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <Container >
            <GithubLogo/>
            <SearchForm>
                <input placeholder="Search or jump to..."/>
            </SearchForm>
        </Container>
    )
}
export default Header