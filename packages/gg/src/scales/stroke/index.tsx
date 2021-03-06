import React, { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { scalesState } from "../../atoms"
import { AnyD3Scale } from "@visx/scale/lib/index"

type Props = {
  scheme?: any
  reverse?: boolean
  scale?: AnyD3Scale
}

const ScaleStroke: React.FC<Props> = ({ scheme, reverse = false, scale }) => {

  const setScalesState = useSetRecoilState(scalesState)

  useEffect(() => {
    setScalesState((scales: any) => {
      return (
        {
          ...scales,
          stroke: {
            scheme,
            reverse,
            scale
          }
        }
      )
    })
  }, [setScalesState, scheme, reverse, scale])

  return null
}

ScaleStroke.displayName = "ScaleStroke"
export { ScaleStroke }
