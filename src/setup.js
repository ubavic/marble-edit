import { baseKeymap } from 'prosemirror-commands'
import { dropCursor } from 'prosemirror-dropcursor'
import { gapCursor } from 'prosemirror-gapcursor'
import { history } from 'prosemirror-history'
import { keymap } from 'prosemirror-keymap'
import { menuBar } from 'prosemirror-menu'

import { mathPlugin } from '@benrbray/prosemirror-math'

import { buildInputRules } from './inputrules'
import { buildKeymap } from './keymap'
import { buildMenuItems } from './menu'


export function setup(options) {
	return [
		buildInputRules(options.schema),
		keymap(buildKeymap(options.schema, options.mapKeys)),
		keymap(baseKeymap),
		mathPlugin,
		dropCursor(),
		gapCursor(),
		menuBar({
			floating: false,
			content: buildMenuItems(options.schema).fullMenu
		}),
		history()
	]
}
