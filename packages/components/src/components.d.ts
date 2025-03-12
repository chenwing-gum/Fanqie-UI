import * as components from './index'
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    FqButton: typeof components.Button;
    FqIcon: typeof components.Icon
  }
}

export {}