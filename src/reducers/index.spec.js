import index from './index'

describe('Reducer', () => {
  it('should handle initial state undefined', () => {
    expect(index(undefined,{ type: '', data: '' }).inputText).toEqual('')
  })  

  it('should handle inputText', () => {
    expect(index({},{ type: 'UPDATE_INPUT', data: '1' }).inputText).toEqual('1')
  })    
})
