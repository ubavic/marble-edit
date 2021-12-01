import { Schema } from 'prosemirror-model'

export const nodes = {
	doc: {
		content: 'block+'
	},

	paragraph: {
		content: 'inline*',
		group: 'block',
		parseDOM: [{ tag: 'p' }],
		toDOM() {
			return ['p', 0] 
		}
	},

	ordered_list: {
		content: 'list_item+',
		group: 'block',
		parseDOM: [{ tag: 'ol' }],
		toDOM() {
			return ['ol', 0] 
		}
	},

	unordered_list: {
		content: 'list_item+',
		group: 'block',
		parseDOM: [{ tag: 'ul' }],
		toDOM() {
			return ['ul', 0] 
		}
	},

	list_item: {
		content: 'block+',
		parseDOM: [{ tag: 'li' }],
		toDOM() {
			return ['li', 0] 
		}
	},

	code_block: {
		content: 'text*',
		marks: '',
		group: 'block',
		code: true,
		defining: true,
		parseDOM: [{ tag: 'pre', preserveWhitespace: 'full' }],
		toDOM() {
			return ['pre', 0] 
		}
	},

	text: {
		group: 'inline'
	},

	math_inline: {
		group: 'inline math',
		content: 'text*',
		inline: true,
		atom: true,
		parseDOM: [{ tag: 'math-inline' }],
		toDOM() {
			return ['math-inline', { class: 'math-node' }, 0] 
		}
	},

	math_display: {
		group: 'block math',
		content: 'text*',
		atom: true,
		code: true,  
		parseDOM: [{ tag: 'math-display' }],
		toDOM() {
			return ['math-display', { class: 'math-node' }, 0] 
		}
	}
}

export const marks = {
	em: {
		parseDOM: [{ tag: 'i' }, { tag: 'em' }],
		toDOM() {
			return ['em', 0] 
		}
	},

	strong: {
		parseDOM: [{ tag: 'strong' }, { tag: 'b' }],
		toDOM() {
			return ['strong', 0] 
		}
	},

	code: {
		parseDOM: [{ tag: 'code' }],
		toDOM() {
			return ['code', 0] 
		}
	}
}

export const schema = new Schema({ nodes, marks })
