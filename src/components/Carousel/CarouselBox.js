import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src:
      "https://images.unsplash.com/photo-1531573241436-069768aa6b81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d85acfd5e5a690e1b9fb9b9cb1ac114f&auto=format&fit=crop&w=1350&q=80",
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src:
      "https://images.unsplash.com/photo-1536551739350-d473d0f5d66a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=008122b00ce6617ca065ffff90c78e11&auto=format&fit=crop&w=1350&q=80",
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src:
      "https://images.unsplash.com/photo-1498568715259-5c1dc96aa8e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ad416811db9057a089db51b5b7f97794&auto=format&fit=crop&w=1350&q=80",
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

class CarouselBox extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default CarouselBox;
