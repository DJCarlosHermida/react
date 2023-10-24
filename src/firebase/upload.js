import MOCK from '../data/MOCK_DATA.json' assert { type: "json" }
import { db } from './config.js'
import { collection, addDoc } from 'firebase/firestore'

MOCK.forEach(item => delete item.id)

const productosRef = collection(db, 'productos')

MOCK.forEach(item => {
    addDoc(productosRef, item)
})