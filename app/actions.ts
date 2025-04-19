"use server"

export async function downloadCV() {
  // In a real implementation, this would generate or serve a PDF file
  // For now, we'll return a success message that would be used in the client component
  return { success: true, message: "CV downloaded successfully" }
}
