function tokenFormat(token, index) {
  const defToken = {
    token: '',
    alias: `token${index + 1}`,
    tgUid: '',
    qywxUid: '',
    barkKey: ''
  }

  if (typeof token == 'string') {
    token = { token }
  }

  return Object.assign({}, defToken, token)
}

function parseToken(token) {
  const likeArray = /^\[.*\]$/.test(token)
  const likeObject = /^\{.*\}$/.test(token)
  let tokenList = []

  if (!likeArray && !likeObject) {
    return [tokenFormat(token)]
  }

  try {
    tokenList = tokenList.concat(JSON.parse(token))
    console.log('测试打点'，tokenList)
  } catch (e) {
    throw new Error('JSON 格式有误' + e)
  }

  return tokenList.map(tokenFormat)
}

module.exports = parseToken
