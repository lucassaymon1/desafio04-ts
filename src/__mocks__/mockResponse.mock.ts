import { Response } from "express"

type MockResponse<TResult> = Response & {
  state: {
    status?: number,
    json?: TResult | unknown
  }
}

export function makeMockResponse<TResult> (){

  const response = {
    state: {}
  } as MockResponse<TResult>

  response.json = (json: TResult) => {
    response.state.json = json
    return response
  }

  response.status = (status: number) => {
    response.state.status = status
    return response
  }

  return response

}