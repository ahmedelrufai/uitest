import Events from "events";
const event = new Events()
event.setMaxListeners(0)
export default event
export const NAVIGATE_TO_LOGIN = "NAVIGATE_TO_LOGIN"
export const CLEAR_LOGIN = "CLEAR_LOGIN"

