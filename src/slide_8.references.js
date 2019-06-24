// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, Notes, S, Link, List, ListItem } from 'spectacle'

export const Slide8 = (
  <Slide controlColor="primary" progressColor="primary">
    <Notes>Czas na pytania</Notes>
    <Heading margin="30px 0 30px 0" size={6} caps lineHeight={1} textColor="primary">
      Źródła
    </Heading>
    <List bulletStyle="arrow">
      <ListItem textSize={26} margin="10px 0">
        <Link textColor="#ffc" href="https://cypress.io">
          <S type="underline">cypress.io</S>
        </Link>
      </ListItem>
      <ListItem textSize={26} margin="10px 0">
        <Link textColor="#ffc" href="https://www.youtube.com/watch?v=pXyBligMMr0">
          <S type="underline">Cypress: The future of E2E testing</S>
        </Link>{' '}
        - Dominic Elm
      </ListItem>
      <ListItem textSize={26} margin="10px 0">
        <Link textColor="#ffc" href="https://www.youtube.com/watch?v=5XQOK0v_YRE">
          <S type="underline">I see your point, but… (Part1)</S>
        </Link>{' '}
        - Brian Mann
      </ListItem>
      <ListItem textSize={26} margin="10px 0">
        <Link textColor="#ffc" href="https://www.youtube.com/watch?v=5FnalKRjpZk">
          <S type="underline">I see your point, but… (Part2)</S>
        </Link>{' '}
        - Gleb Bahmutov
      </ListItem>
      <ListItem textSize={26} margin="10px 0">
        <Link textColor="#ffc" href="https://frontendmasters.com/courses/testing-react/cypress/">
          <S type="underline">Frontend Masters: Testing React Applications</S>
        </Link>
      </ListItem>
      <ListItem textSize={26} margin="10px 0">
        <Link textColor="#ffc" href="https://testingjavascript.com/">
          <S type="underline">Testing Javascript</S>
        </Link>{' '}
        - Kent C. Dodds
      </ListItem>
    </List>
  </Slide>
)
