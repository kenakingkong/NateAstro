import * as React from "react"
import { MediaContextProvider } from "./src/media"

export const wrapRootElement = ({ element }) => (
   <MediaContextProvider>{element}</MediaContextProvider>
)