// CSRF防护工具

/**
 * 生成CSRF令牌
 * @returns 生成的CSRF令牌
 */
export const generateCsrfToken = (): string => {
  const token =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)

  // 存储令牌到localStorage
  localStorage.setItem('csrfToken', token)

  return token
}

/**
 * 获取CSRF令牌
 * @returns CSRF令牌，如果不存在则生成新的
 */
export const getCsrfToken = (): string => {
  let token = localStorage.getItem('csrfToken')
  if (!token) {
    token = generateCsrfToken()
  }
  return token
}

/**
 * 验证CSRF令牌
 * @param token 要验证的令牌
 * @returns 是否验证通过
 */
export const validateCsrfToken = (token: string): boolean => {
  const storedToken = localStorage.getItem('csrfToken')
  return storedToken === token
}

/**
 * 清除CSRF令牌
 */
export const clearCsrfToken = (): void => {
  localStorage.removeItem('csrfToken')
}

/**
 * 为请求添加CSRF令牌
 * @param headers 请求头对象
 * @returns 添加了CSRF令牌的请求头
 */
export const addCsrfTokenToHeaders = (
  headers: Record<string, string> = {}
): Record<string, string> => {
  const token = getCsrfToken()
  return {
    ...headers,
    'X-CSRF-Token': token
  }
}
