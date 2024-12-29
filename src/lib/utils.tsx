import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// 用于合并和处理 CSS 类名, 通过其参数可以动态生成背景样式
export default function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
