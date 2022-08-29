import type { GreetingSettings } from '../types/greeting.js'

export function greet (setting: GreetingSettings): void {
  console.log(setting.greeting)
}
