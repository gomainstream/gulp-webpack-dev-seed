require('../sass/main.scss');

import component from './component';

const app = document.createElement('div');
document.body.appendChild(app);
app.appendChild(component());
