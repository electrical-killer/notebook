import { cn } from "@site/src/lib/utils";
import React from "react";

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

/* 
| Prop      | Type            | Description                                      | Default |
| --------- | --------------- | ------------------------------------------------ | ------- |
| className | string          | The class name for the component                 | ""      |
| children  | React.ReactNode | The children nodes of the component              | null    |
| reverse   | boolean         | If true, the animation plays in reverse          | false   |
| duration  | number          | The duration of the animation in seconds         | 20      |
| delay     | number          | The delay before the animation starts in seconds | 10      |
| radius    | number          | The radius of the orbit in pixels                | 50      |
 */
export default function OrbitingCircles({
  className, // 类名
  children, // 子节点
  reverse, // 反向使能
  duration = 20, // 持续时间
  delay = 10, // 开始前延时
  radius = 50, // 半径
  path = true, // 是否显示轨迹
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}
