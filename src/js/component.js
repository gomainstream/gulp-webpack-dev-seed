require('./component.scss');

const component = function () {
  const element = document.createElement('header');

  let html = '<img src="/images/icon.png">';
  html += '<div>gulp-webpack-seed-kit</div>';
  element.innerHTML = html;
  return element;
};

export default component;
