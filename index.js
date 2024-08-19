const express = require('express');
const cors = require('cors');
const estudiantesRoutes = require('./routes/estudiantesRoutes');
const profesoresRoutes = require('./routes/profesoresRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('---404---');
});

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


