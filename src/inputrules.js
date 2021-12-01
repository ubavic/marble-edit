import { ellipsis, emDash, inputRules, smartQuotes } from 'prosemirror-inputrules'

import { makeBlockMathInputRule, makeInlineMathInputRule } from '@benrbray/prosemirror-math'

export function buildInputRules(schema) {
	const inlineMathInputRule = makeInlineMathInputRule(/\$(.+)\$/, schema.nodes.math_inline)
	const inlineMathInputRule2 = makeInlineMathInputRule(/\\\((.+)\\\)/, schema.nodes.math_inline)
	const blockMathInputRule = makeBlockMathInputRule(/\$\$\s+$/, schema.nodes.math_display)
	const blockMathInputRule2 = makeBlockMathInputRule(/\\\[(.+)\\\]/, schema.nodes.math_display)

	let rules = smartQuotes.concat(ellipsis, emDash)
	rules.push(inlineMathInputRule)
	rules.push(inlineMathInputRule2)
	rules.push(blockMathInputRule)
	rules.push(blockMathInputRule2)
	return inputRules({ rules })
}
