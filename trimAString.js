String.prototype.trim = function() {
  return this.replace(/^\s{1,}/,"").replace(/\s{1,}$/,"");
};
