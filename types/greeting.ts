export interface GreetingSettings {
  greeting: string
  duration?: number
  color?: string
}
/* eslint-disable */
declare function greet (setting: GreetingSettings): void
