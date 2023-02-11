import { TranslationQuery } from 'next-translate'
import useTranslation from 'next-translate/useTranslation'

import { LanguageList, LocaleInfoList, LocaleList } from '@/locales/types'

export type TypedTranslate<T extends LocaleInfoList> = (
  i18nKey: LocaleList<T>,
  query?: TranslationQuery | null,
  options?: {
    returnObjects?: boolean
    fallback?: string | string[]
    default?: string
    ns?: string
  }
) => string

export const useTSTranslation = <T extends LocaleInfoList>(
  defaultNS = 'common' as T
): {
  t: TypedTranslate<T>
  lang: LanguageList
} => {
  const { lang, t: tr } = useTranslation(defaultNS)

  const t: TypedTranslate<T> = (i18nKey, query, options): string =>
  tr(i18nKey, query, options)

  return { t, lang: lang as LanguageList }
}
