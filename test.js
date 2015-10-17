import test from 'ava'
import isBlank from 'is-blank'
import getMacs from './'

test('throws an error when a string is not passed', t => {
  t.plan(1)

  t.throws(getMacs, TypeError)
})

test('returns the macs within a string', t => {
  t.plan(1)

  const macs = ['aa:bb:cc:dd:ee:ff', '11-22-33-44-55-66', 'AA-BB-cc-DD-33-aA']
  t.same(getMacs(macs.join()), macs)
})

test('does not return macs when they do not exist', t => {
  t.plan(1)

  t.ok(isBlank(getMacs('aa-bb-cc-dd blah')))
})
