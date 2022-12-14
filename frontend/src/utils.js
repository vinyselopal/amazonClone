import { useSelector } from 'react-redux'

export const useSelectorWrapper = (prop) => {
  return useSelector(state => state[prop])
}

export function passwordIsValid (password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  if (!regex.test(password)) return false
  return true
}

export function emailIsValid (email) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true
  }
  return false
}
