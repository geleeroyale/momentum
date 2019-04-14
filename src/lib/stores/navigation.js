import { Store } from 'laco'

export const NavStore = new Store({ state: 'commons' })

export const changeState = newState => NavStore.set(() => ({ state: newState }))
