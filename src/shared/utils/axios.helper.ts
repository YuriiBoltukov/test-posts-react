import { message } from 'antd'
import { AxiosError } from 'axios'

/**
 * Handles Axios errors by displaying an error message using Ant Design's message component
 */
export function handleAxiosError(error: AxiosError) {
  message.error(error.message)
}

/**
 * Handles unexpected errors by displaying a generic error message using Ant Design's message component
 * and logging the error to the console
 */
export function handleUnexpectedError(error: any) {
  message.error('Something went wrong')
  console.error(error)
}
