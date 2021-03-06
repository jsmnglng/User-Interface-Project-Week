class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.leftBtn = this.carousel.querySelector('.controls .left-button');
    this.rightBtn = this.carousel.querySelector('.controls .right-button');
    this.images = this.carousel.querySelectorAll('.images img');
    this.index = 0;

    this.leftBtn.addEventListener('click', (event) => this.previous(event));
    this.rightBtn.addEventListener('click', (event) => this.next(event));

    this.activeImage();
    this.loopCarousel();
  }

  activeImage() {
    this.images[0].classList.add('show-img');
  }

  loopCarousel() {
    const self = this;

    setInterval(function() {
      if (self.index === self.images.length) {
          clearInterval();
          self.index = 0;
          self.images[self.index].classList.add('show-img');
      }
      self.images.forEach(image => image.classList.remove('show-img'));
      self.images[self.index].classList.add('show-img');
      self.index += 1;
  }, 3000);
  }

  previous() {
    if (this.index === 0) {
      this.index = this.images.length - 1;
    } else {
      this.index = this.index - 1;
    }

    this.images.forEach(image => image.classList.remove('show-img'));

    this.images[this.index].classList.add('show-img');
  }

  next() {
    if (this.index === this.images.length-1) {
      this.index = 0;
    } else {
      this.index = this.index + 1;
    }

    this.images.forEach(image => image.classList.remove('show-img'));

    this.images[this.index].classList.add('show-img');
  }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
