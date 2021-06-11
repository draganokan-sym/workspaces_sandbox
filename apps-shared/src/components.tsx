import React, { FC } from "react"
import { TypeA, TypeB } from "."
import "./style.scss"

export const RenderA: FC<{ prop: TypeA }> = ({ prop }) => {
  return <div className="render-a">A: {prop}</div>
}

export const RenderB: FC<{ prop: TypeB }> = ({ prop }) => {
  return <div>B: {prop}</div>
}
