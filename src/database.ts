import {createConnection} from 'mysql';
import keys from './keys';//importacion del archivo con las llaves para cceder a la BD

const connection= createConnection(keys.database);

export default connection;

    