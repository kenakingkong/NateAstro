import { createMedia } from "@artsy/fresnel"

const QueryBreakpoints = createMedia({
  breakpoints: {
    xs: 0,
    sm: 768,
    md: 1000,
    lg: 1200,
  },
})

export const mediaStyles = QueryBreakpoints.createMediaStyle()
export const { Media, MediaContextProvider } = QueryBreakpoints