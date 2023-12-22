/* eslint-disable */
export type Token = "colors.blue.50" | "colors.blue.100" | "colors.blue.200" | "colors.blue.300" | "colors.blue.400" | "colors.blue.500" | "colors.blue.600" | "colors.blue.700" | "colors.blue.800" | "colors.blue.900" | "colors.gray.50" | "colors.gray.75" | "colors.gray.100" | "colors.gray.150" | "colors.gray.200" | "colors.gray.300" | "colors.gray.400" | "colors.gray.500" | "colors.gray.600" | "colors.gray.700" | "colors.gray.800" | "colors.gray.900" | "colors.gray.950" | "colors.white" | "colors.black" | "fonts.inter" | "fonts.work" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "colors.neutral.foreground.1.enabled" | "colors.neutral.background.1.enabled" | "colors.colorPalette.50" | "colors.colorPalette.100" | "colors.colorPalette.200" | "colors.colorPalette.300" | "colors.colorPalette.400" | "colors.colorPalette.500" | "colors.colorPalette.600" | "colors.colorPalette.700" | "colors.colorPalette.800" | "colors.colorPalette.900" | "colors.colorPalette.75" | "colors.colorPalette.150" | "colors.colorPalette.950" | "colors.colorPalette" | "colors.colorPalette.foreground.1.enabled" | "colors.colorPalette.1.enabled" | "colors.colorPalette.enabled" | "colors.colorPalette.background.1.enabled"

export type ColorPalette = "blue" | "gray" | "white" | "black" | "neutral" | "neutral.foreground" | "neutral.foreground.1" | "neutral.background" | "neutral.background.1"

export type ColorToken = "blue.50" | "blue.100" | "blue.200" | "blue.300" | "blue.400" | "blue.500" | "blue.600" | "blue.700" | "blue.800" | "blue.900" | "gray.50" | "gray.75" | "gray.100" | "gray.150" | "gray.200" | "gray.300" | "gray.400" | "gray.500" | "gray.600" | "gray.700" | "gray.800" | "gray.900" | "gray.950" | "white" | "black" | "neutral.foreground.1.enabled" | "neutral.background.1.enabled" | "colorPalette.50" | "colorPalette.100" | "colorPalette.200" | "colorPalette.300" | "colorPalette.400" | "colorPalette.500" | "colorPalette.600" | "colorPalette.700" | "colorPalette.800" | "colorPalette.900" | "colorPalette.75" | "colorPalette.150" | "colorPalette.950" | "colorPalette" | "colorPalette.foreground.1.enabled" | "colorPalette.1.enabled" | "colorPalette.enabled" | "colorPalette.background.1.enabled"

export type FontToken = "inter" | "work"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type AnimationName = "spin" | "ping" | "pulse" | "bounce"

export type Tokens = {
		colors: ColorToken
		fonts: FontToken
		breakpoints: BreakpointToken
		sizes: SizeToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"