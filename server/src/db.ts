import mongodb from "mongodb"

export const collections: any = { }

export async function connectToDatabase(uri: string) {
    try{
        const client = new mongodb.MongoClient(uri)
        await client.connect()

        const db = client.db("Logintest")

        const users = db.collection("users")
        collections.users = users
    } catch(e) {
        throw new Error(e.message)
    }
}