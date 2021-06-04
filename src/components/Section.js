export default class Section {
   constructor({ items,
      renderer }, containerSelector) {
      this._renderer = renderer;
      this._renderedItems = items;
      this._container = containerSelector;
   }
   renderItems() {
      this._renderedItems.forEach((item) => {
         this._renderer(item)
      })
   }
   addItem(el) {
      this._container.append(el);
   }
   newItem(el) {
      this._container.prepend(el);
   }
}
