require('../sass/main.scss');

const component = require('./component');

const app = document.createElement('div');
document.body.appendChild(app);
app.appendChild(component());
