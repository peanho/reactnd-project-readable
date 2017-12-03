/**
 * Returns a timestamp converted to the ellapsed time.
 */
export const timestampToEllapsedTime = ellapsed => {
  if (ellapsed < 1000) {
    return 'now'
  } else if (ellapsed < 60000) {
    return `${Math.trunc(ellapsed / 1000)} seconds ago`
  } else if (ellapsed < 3600000) {
    return `${Math.trunc(ellapsed / 60000)} minutes ago`
  } else if (ellapsed < 86400000) {
    return `${Math.trunc(ellapsed / 3600000)} hours ago`
  } else if (ellapsed < 2073600000) {
    return `${Math.trunc(ellapsed / 86400000)} days ago`
  } else if (ellapsed < 62208000000) {
    return `${Math.trunc(ellapsed / 2073600000)} months ago`
  } else {
    return `${Math.trunc(ellapsed / 62208000000)} years ago`
  }
}

/**
 * Returns timestamp converted to a human readable date.
 */
export const timestampToLocaleString = timestamp => {
  return new Date(timestamp).toLocaleString();
}
