import mysql, { Connection} from 'mysql2';

const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ifsp',
    database: 'biblioteca'
};

const mysqlConnection: Connection = mysql.createConnection(dbConfig)

mysqlConnection.connect((err) => {
    if(err) {
        console.error('Erro ao conectar com o banco de dados', err);
        throw err;
    }
    console.log('Conexão foi um sucesso com o banco de dados!');
});

export function executarComandoSQL(query: string, valores: any[]){
    return new Promise<any>(
        (resolve, reject) => {
            mysqlConnection.query(query, valores, (err, resultado: any) =>
            {
                if(err) {
                    reject(err);
                    throw err;
                }
                resolve(resultado);
            })
        }
    )
}