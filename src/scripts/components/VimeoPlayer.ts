export class VimeoPlayer extends HTMLElement {
  // @ts-expect-error external library
  private player?: Vimeo.Player;

  private playButton?: HTMLButtonElement | null;

  connectedCallback() {
    this.render();
    this.initPlayer();
    this.classList.add('dermodays-player');
    this.tabIndex = 0;
    this.addEventListener('click', this.handlePlayback);
    this.addEventListener('keydown', this.handlePlayback);
    this.playButton = this.querySelector('.dermodays-play');
    this.style.setProperty('--poster', `url('/desktop/poster-${this.posterName}.webp')`);
  }

  async handlePlayback(event: MouseEvent | KeyboardEvent) {
    if (event instanceof KeyboardEvent && event.type === 'keydown' && event.key !== 'Enter') return;

    const isPaused = await this.player.getPaused();

    if (isPaused) {
      await this.player.play();
      this.playButton?.classList.add('dermodays-hidden');
    } else {
      await this.player.pause();
      this.playButton?.classList.remove('dermodays-hidden');
    }
  }

  disconnectedCallback() {
    this.player?.destroy();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'src' && newValue !== oldValue) {
      this.player?.destroy();
      this.render();
    }
  }

  render() {
    this.innerHTML = '<button class="dermodays-play dermodays-hidden"><play-icon></play-icon><span class="visually-hidden">Play video</span></button>';
  }

  get posterName() {
    return this.getAttribute('postername');
  }

  get src() {
    return this.getAttribute('src');
  }

  async setStyles() {
    const inlineSize = await this.player.getVideoWidth();
    const blockSize = await this.player.getVideoHeight();

    this.style.setProperty('--inline-size', inlineSize);
    this.style.setProperty('--block-size', blockSize);
    this.playButton?.classList.remove('dermodays-hidden');
  }

  initPlayer() {
    // @ts-expect-error external library
    if (Vimeo) {
      // @ts-expect-error external library
      this.player = new Vimeo.Player(this, {
        controls: false,
        url: `https://player.vimeo.com/video/${this.src}`,
        width: '640',
      });

      this.setStyles();
    }
  }
}
