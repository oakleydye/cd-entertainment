import { create } from 'zustand'

export interface AppState {
  currentSection: string
  isMobile: boolean
  acceptingRequests: boolean
  setCurrentSection: (section: string) => void
  setIsMobile: (isMobile: boolean) => void
  setAcceptingRequests: (accepting: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  currentSection: 'hero',
  isMobile: false,
  acceptingRequests: false,
  setCurrentSection: (section: string) => set({ currentSection: section }),
  setIsMobile: (isMobile: boolean) => set({ isMobile }),
  setAcceptingRequests: (accepting: boolean) => set({ acceptingRequests: accepting }),
}))
