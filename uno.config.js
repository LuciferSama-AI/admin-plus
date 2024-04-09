import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

const unoPreset = [presetUno(), presetIcons(), presetAttributify()];
const unoRules = [];
const unoShortCuts = [];
const unoTheme = [];

export default defineConfig({
  rules: unoRules,
  theme: unoTheme,
  presets: unoPreset,
  shortcuts: unoShortCuts,
});
