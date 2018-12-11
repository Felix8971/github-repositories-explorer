import * as actions from './index'

describe('actions', () => {
  describe('repo explorer actions', () => {
    it('updateInputTextAction should create UPDATE_INPUT action', () => {
      expect(actions.updateInputTextAction('foo')).toEqual({
        type: 'UPDATE_INPUT',
        data: 'foo',
      })
    })
  })
})
