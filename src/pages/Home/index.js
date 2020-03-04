import React, { Component } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {
  CatFeed,
  CatList,
  CatListContainer,
  CatItem,
  CatImg,
  CatName,
  Container,
  SectionHeader,
  FeedList,
  FeedItem,
} from './styles';
import api from '../../services/api';

class Home extends Component {
  state = {
    catList: [],
  };

  async componentDidMount() {
    let response = {};

    try {
      response = await api.get('/images/search', {
        params: {
          size: 'small',
          limit: 5,
        },
        headers: {
          'X-API-KEY': '7254a3a1-9a81-4ed7-b2dd-2124f51b5f5f',
        },
      });
    } catch (err) {
      response.data = [];
    }
    this.setState({ catList: response.data });
  }

  render() {
    const { catList } = this.state;
    return (
      <Container>
        <CatFeed>
          <SectionHeader>Cat Feed</SectionHeader>
          <FeedList>
            <FeedItem>
              How to find the purrrfect pet
              <MdKeyboardArrowRight size={20} color="#5452F6" />
            </FeedItem>
            <FeedItem>
              What to do with your new cat
              <MdKeyboardArrowRight size={20} color="#5452F6" />
            </FeedItem>
            <FeedItem>
              How to potty-train your cat
              <MdKeyboardArrowRight size={20} color="#5452F6" />
            </FeedItem>
          </FeedList>
        </CatFeed>
        <CatListContainer>
          <SectionHeader>Cat List</SectionHeader>
          <CatList>
            {catList.map(cat => (
              <CatItem key={cat.id}>
                <CatImg src={cat.url} alt="cat" />
                <CatName>Kitty Cat</CatName>
                <p>
                  <strong>Age</strong>3 years
                </p>
                <p>
                  <strong>Favorite Activity</strong>Eating
                </p>
                <p>
                  <strong>Pet Peave</strong>Hairballs
                </p>
              </CatItem>
            ))}
          </CatList>
        </CatListContainer>
      </Container>
    );
  }
}

export default Home;
