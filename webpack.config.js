import path from 'path';
import { fileURLToPath } from 'url';

// Debido a que en módulos ES no existe __dirname, lo definimos así:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js', // Punto de entrada de tu aplicación
  output: {
    filename: 'bundle.js', // Nombre del archivo empaquetado
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    // Si deseas que el bundle se exporte como módulo, puedes activar outputModule:
    // module: true,
  },
  mode: 'production', // O 'development' según necesites
  module: {
    rules: [
      {
        test: /\.m?js$/,  // Para archivos JavaScript (incluyendo módulos ES)
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Si deseas transpilar tu código
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
