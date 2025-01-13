class MiniVueReactive {
  /*
    options:
      data() => { ... }
  */
  constructor({ data }) {
    this.origen = data();
  }

  mount() {
    document.querySelectorAll("*[p-text]").forEach(el => {
      this.pText(el, this.origen, el.getAttribute("p-text"));
    });
  }

  pText(el, target, name) {
    el.innerText = target[name];
  }

  pModel() {}
}

var MiniVue = {
  createApp(options) {
    return new MiniVueReactive(options);
  }
};