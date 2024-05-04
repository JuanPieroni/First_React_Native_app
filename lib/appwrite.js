import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite"

export const config = {
    endpoint: "https://cloud.appwrite.io.v1",
    platform: "com.jsm.aora",
    projectId: "663562f5000bf9a960c5",
    databaseId: "66356d8d001f42c05d17",
    userCollectionId: "66356dbc0038c04268ef",
    videoCollecionId: "66356df4000099bffaa5",
    storageId: "66356f4a00206ed561ec",
}

// Init your react-native SDK
const client = new Client()

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

const account = new Account(client)
const avatars = new Avatars(client)
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if (!newAccount) throw Error
        const avatarUrl = avatars.getInitials(username)
        await signIn(email, password)
        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),

            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl,
            }
        )
        return newUser
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}
export async function signIn(email, password) {
    try {
        const session = await account.createEmailSession(email, password)
        return session
    } catch (error) {
        throw new Error(error)
    }
}
