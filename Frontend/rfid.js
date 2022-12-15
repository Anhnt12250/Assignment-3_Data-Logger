export const test = fetch('http://10.104.21.89:3000/rfid')

export const realTimeRFID = new EventSource('http://10.104.21.89:3000/rfid/realtime')