export function log(message, level = "INFO ") {
    const timeStamp = new Date().toISOString();
    console.log(`[${level}] ${timeStamp} - ${message}`)
}