import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.main`
  display: flex;
  justify-content: space-between;

  margin: 0 50px;
`;

export const SectionCard = styled.section`
  background: #fff;
  border-radius: 4px;
`;

export const SectionHeader = styled.header`
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
  color: #000000;
  padding: 16px;
  border-bottom: 1px solid #d0dae8;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 16px;
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: background 0.5s cubic-bezier(0, 0, 0.3, 1);

  & + li {
    border-top: 1px solid #d0dae8;
  }

  &:hover {
    background: ${darken(0.05, '#fff')};
  }

  color: #000;
  padding: 15px 0;
  margin: 0 10px;
`;

export const FeedList = styled(StyledList)``;

export const FeedItem = styled(StyledItem)`
  font-style: italic;
  font-weight: normal;
  font-size: 15px;
  line-height: 14px;
`;

export const CatFeed = styled(SectionCard)`
  width: 316px;

  & + section {
    margin-left: 25px;
  }
`;

export const CatListContainer = styled(SectionCard)`
  flex: 1;
`;

export const CatList = styled(StyledList)`
  padding: 0 16px;
`;

export const CatItem = styled(StyledItem)`
  padding: 15px 20px;
`;

export const CatImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
`;

export const CatName = styled.h2`
  font-style: italic;
  font-size: 15px;
  line-height: 14px;
`;
