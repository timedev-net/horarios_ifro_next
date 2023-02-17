
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export const db = {
  
  connection: {
    filename: './database.db',
    driver: sqlite3.Database
  },


  getDisciplinas: async () => {
    const conn = await open(db.connection)
    const res = await conn.all('select * from disciplinas')
    await conn.close()
    return res
  },
  setDisciplina: async (nome: string) => {
    const conn = await open(db.connection)
    const res = await conn.run('insert into disciplinas (nome) values (?)', nome)
    await conn.close()
    return res
  },
  delDisciplina: async (id: number) => {
    const conn = await open(db.connection)
    const res = await conn.run('delete from disciplinas where id=(?)', id)
    await conn.close()
    return res
  },
  getDocentes: async () => {
    const conn = await open(db.connection)
    const res = await conn.all('select * from docentes')
    await conn.close()
    return res
  },
  setDocentes: async (nome: string) => {
    const conn = await open(db.connection)
    const res = await conn.run('insert into docentes (nome) values (?)', nome)
    await conn.close()
    return res
  },
  delDocentes: async (id: number) => {
    const conn = await open(db.connection)
    const res = await conn.run('delete from docentes where id=(?)', id)
    await conn.close()
    return res
  },
  getAmbientes: async () => {
    const conn = await open(db.connection)
    const res = await conn.all('select * from ambientes')
    await conn.close()
    return res
  },
  setAmbientes: async (nome: string) => {
    const conn = await open(db.connection)
    const res = await conn.run('insert into ambientes (nome) values (?)', nome)
    await conn.close()
    return res
  },
  delAmbientes: async (id: number) => {
    const conn = await open(db.connection)
    const res = await conn.run('delete from ambientes where id=(?)', id)
    await conn.close()
    return res
  },
  getHorarios: async () => {
    const conn = await open(db.connection)
    const res = await conn.all('select * from horarios')
    await conn.close()
    return res
  },
  setHorarios: async (nome: string) => {
    const conn = await open(db.connection)
    const res = await conn.run('insert into horarios (nome) values (?)', nome)
    await conn.close()
    return res
  },
}

