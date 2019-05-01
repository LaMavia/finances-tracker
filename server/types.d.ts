import { River } from "river-flow";
import React from "react"

declare type Executable<T> = (arg: River.KeyValueMap) => T

declare type ConstructorParameters<T extends ClassConstructor> = T extends new (args: infer P) => any ? P : never;

declare type ClassConstructor<T = any> = new(...args: any[]) => T

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DBURI: string
    }
  }
}