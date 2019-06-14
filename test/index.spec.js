import hello from '@/hello'

describe('test source of monitors', () => {
  it('should give hello with name given', () => {
    expect(hello('greatbody')).toBe('Hello greatbody.')
  })

  it('should give hello to friends without name given', () => {
    expect(hello()).toBe('Hello to my friends.')
  })
})
