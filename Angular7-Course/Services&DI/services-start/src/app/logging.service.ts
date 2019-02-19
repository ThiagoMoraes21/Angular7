//  Service that log in the console the Status of the Server if some change occurs
export class LoggingService {
    logStatusChange(status: string) {
      console.log(`Server status changed, new status: ${status}`)
    }
}
