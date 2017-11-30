// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Link } from 'react-router-dom';

import variables from './variables';

import Modal from './ui/Modal';

const Container = styled.div`
  overflow: hidden;
  padding: 18px 24px 30px;
  background-color: ${variables.colorNeutralLightest};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    padding: 24px;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const InnerContainer = styled.div`
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 960px;
    margin: 0 auto;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const Heading = styled.div`
  color: ${variables.colorNeutral};
  font-size: ${variables.fontSizeSmall};
  text-align: center;
  margin-top: 18px;
  margin-bottom: 6px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const ItemsContainer = styled.div`
  position: relative;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: ${props => (props.absolute ? 'absolute' : 'static')};
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${props => (props.active ? 1 : 0)};
  pointer-events: ${props => (props.active ? 'auto' : 'none')};
  transition: all 0.6s;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
`;

const Item = styled.div`
  flex: 0 0 ${props => 100 / 3 + '%'};
  padding: 0 12px;
  opacity: 0.5;
  transform: ${props => (props.active ? 'none' : 'translateY(96px)')};
  transition: all 0.6s;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    flex: 0 0 ${props => 100 / props.itemsPerRow + '%'};
    padding: 0 30px;
    &: hover {
      opacity: .75;
    }
  `};
`;

const ItemLink = styled(Link)``;

const ItemImage = styled.img`
  width: 100%;
`;

type Props = {
  title: string,
  items: Array<Object>,
};

type State = {
  page: number,
  isModalOpen: boolean,
  videoId: ?string,
};

class LogoStrip extends React.Component<Props, State> {
  intervalId: any;
  itemsPerRow: number;

  state = {
    page: 0,
    isModalOpen: false,
    videoId: '',
  };

  constructor(props: Props) {
    super(props);

    this.itemsPerRow = 6;
  }

  componentDidMount() {
    const totalPages = Math.ceil(this.props.items.length / this.itemsPerRow);

    this.intervalId = setInterval(() => {
      const nextPage =
        this.state.page >= totalPages - 1 ? 0 : this.state.page + 1;
      this.setState({ page: nextPage });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  handleClick(e: Event, item: Object) {
    if (!item.link) {
      e.preventDefault();
    } else if (item.modal && item.videoId) {
      e.preventDefault();

      this.setState({
        isModalOpen: true,
        videoId: item.videoId,
      });
    }
  }

  render() {
    const totalItems = this.props.items.length;
    const groups = [];
    const items = [];

    for (let i = 0; i < totalItems; i++) {
      items.push(this.props.items[i]);

      if ((i + 1) % this.itemsPerRow === 0 || i + 1 === totalItems) {
        groups.push(items.splice(0, items.length));
      }
    }

    return (
      <Container>
        <InnerContainer>
          <Heading>{this.props.title}</Heading>
          <ItemsContainer>
            {groups.map((group, i) => (
              <Items active={this.state.page === i} key={i} absolute={i > 0}>
                {group.map((item, j) => (
                  <Item
                    active={this.state.page === i}
                    key={j}
                    itemsPerRow={this.itemsPerRow}
                  >
                    <ItemLink
                      to={item.link || ''}
                      target="_blank"
                      onClick={e => {
                        this.handleClick(e, item);
                      }}
                    >
                      <ItemImage src={item.image} alt={item.name} />
                    </ItemLink>
                  </Item>
                ))}
              </Items>
            ))}
          </ItemsContainer>
        </InnerContainer>
        <Modal
          isOpen={this.state.isModalOpen}
          closeModal={this.closeModal.bind(this)}
        >
          {this.state.videoId && (
            <div className="ReactModal__video">
              <iframe
                title="YouTube"
                src={
                  'https://www.youtube.com/embed/' +
                  this.state.videoId +
                  '?rel=0&amp;showinfo=0&amp;autoplay=1'
                }
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )}
        </Modal>
      </Container>
    );
  }
}

export default LogoStrip;
