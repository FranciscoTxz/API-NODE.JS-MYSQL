const express = require('express');
const estudiantesRoutes = require('./routes/estudiantesRoutes');
const profesoresRoutes = require('./routes/profesoresRoutes');

const app = express();

app.get('/', (req, res) => {
    res.send('---404---');
});

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


