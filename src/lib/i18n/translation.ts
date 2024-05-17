import { useTranslation } from 'react-i18next'

export default function t(key: string) {
  const { t } = useTranslation()
  return t(key)
}
