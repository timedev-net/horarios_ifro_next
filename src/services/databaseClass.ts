
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

class Connection {
  filename: string;
  driver: any;

  constructor(filename: string, driver: any) {
    this.filename = filename;
    this.driver = driver;
  }
}

export class DB {
  static connection: Connection = new Connection('./database.db', sqlite3.Database);

  static async getDisciplinas(): Promise<any> {
    const conn = await open(this.connection)
    const res = await conn.all('select * from disciplinas')
    await conn.close()
    return res
  }
  
  static async getDocentes(): Promise<any> {
    const conn = await open(this.connection)
    const res = await conn.all('select * from docentes')
    await conn.close()
    return res
  }

  static async getAmbientes(): Promise<any> {
    const conn = await open(this.connection)
    const res = await conn.all('select * from ambientes')
    await conn.close()
    return res
  }

  static async getHorarios(): Promise<any> {
    const conn = await open(this.connection)
    const res = await conn.all('select * from horarios')
    await conn.close()
    return res
  }
}

