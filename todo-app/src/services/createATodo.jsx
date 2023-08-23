import axios from "axios"

export const createATodo = async ( title, description) => {
  try {
    const apiKey =
      "patfYzEyICL5F9BEh.68047c0b66a0be6d32d0c9355e874b2d791529579a87d9378c1a34f67966b54a"
    const baseId = "app2izY1lRJsYauhK"
    const table = "Imported%20table"
    const url = `https://api.airtable.com/v0/${baseId}/${table}/`

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    }

    const updateFields = {
      fields: {
        title: title,
        description: description,
        completed: 'false',
      },
    }

    await axios.post(url, updateFields, { headers })
    
  } catch (error) {
    console.error("Error updating task completed status:", error)
    throw error
  }
}
