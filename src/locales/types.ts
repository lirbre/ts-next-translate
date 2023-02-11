import { CommonEN } from './en/_types'
import { CommonES } from './es/_types'
import { CommonPTBR } from './pt-BR/_types'

import { locales } from 'i18n'

export type LocaleCommon = keyof CommonEN & keyof CommonES & keyof CommonPTBR

export type LocaleInfoList = 'common'
export type LanguageList = typeof locales[number]

export type LocaleList<T> = T extends LocaleInfoList
  ? T extends 'common'
    ? LocaleCommon
    : never
  : never
